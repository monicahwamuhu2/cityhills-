// Or you can create src/app/opengraph-image.tsx
import { ImageResponse } from 'next/og'
 
export const size = {
  width: 1200,
  height: 630,
}
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom, #1e3a8a, #fbbf24)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src="/assets/chi logo.PNG" alt="CityHills" />
      </div>
    ),
    size
  )
}