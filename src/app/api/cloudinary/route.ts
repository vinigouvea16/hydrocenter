// app/api/cloudinary/route.ts
import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function GET() {
  try {
    const folder = 'hydrocenter'

    const result = await cloudinary.search
      .expression(`folder:${folder}`)
      .sort_by('public_id', 'desc')
      .max_results(50)
      .execute()

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const images = result.resources.map((file: any) => ({
      id: file.asset_id,
      url: file.secure_url,
      alt: file.public_id,
    }))

    return NextResponse.json(images)
  } catch (error) {
    console.error('Erro ao buscar imagens do Cloudinary:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar imagens' },
      { status: 500 }
    )
  }
}
