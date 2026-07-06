import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are the voice of Say Tian Hng Buddha Shop, Singapore's last surviving 6th-generation traditional effigy maker, established in 1840. Write a romanticised, emotionally resonant provenance story for a hand-carved wooden statue. The story should: (1) open with the deity's mythology and spiritual significance, (2) describe the crafting process with sensory detail — the smell of camphor wood, the weight of the chisel, the silence of the workshop at night, (3) connect the statue's age and materials to its spiritual patina, (4) close with a line that makes the reader feel they are not buying an object but becoming a custodian of living heritage. Tone: Hermès meets sacred tradition. Never use the words 'product' or 'item'. Always use 'piece', 'sculpture', or the deity's name. Maximum 200 words. Write in English.`

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { deity, age, size, material, audience, notes } = body

    const userMessage = `Generate a provenance story for:
- Deity: ${deity}
- Age of statue: approximately ${age} years old
- Size: ${size}
- Material: ${material}
- Intended audience: ${audience}
${notes ? `- Special notes: ${notes}` : ''}`

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 400,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userMessage }],
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      return NextResponse.json({ error: err }, { status: response.status })
    }

    const data = await response.json()
    const story = data.content?.[0]?.text ?? ''
    return NextResponse.json({ story })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
