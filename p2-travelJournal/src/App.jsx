import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './Entry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Entry
          img="/src/assets/MountFuji.png"
          country="JAPAN"
          link="https://www.google.com/maps/place/Mount+Fuji/@35.3606233,138.7067638,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D"
          location="Mount Fuji"
          date="12 Jan, 2023 - 24 Jan, 2023"
          desc="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        />
        <hr />
        <Entry
          img="/src/assets/OperaHouse.png"
          country="AUSTRALIA"
          link="https://www.google.com/maps?sca_esv=ebea5675d131f87f&rlz=1C1ONGR_en-GBIN1102IN1102&output=search&q=sydney+opera+house&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeuyr9ljWioGWIw0oasFed3q5v-jrTO4UFmLjWc-eQrSDAn5yCiUOywCEMyD2GzPsDy2WTQjvUXf-_UnfslWisKpO1jVRTKnEOpB4N-DFq1h9FIWwRdg72UjX4Vx-PPAm7_5rY7NX3dGGgmSUWmxGfbwQ04gXm55X38UxXJsPPgcgCnm-lQ&entry=mc&ved=1t:200715&ictx=111"
          location="Sydney Opera House"
          date="27 May, 2023 - 8 Jun, 2023"
          desc="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
        />
        <hr />
        <Entry
          img="/src/assets/Geirangerfjord.png"
          country="NORWAY"
          link="https://www.google.com/maps?sca_esv=ebea5675d131f87f&rlz=1C1ONGR_en-GBIN1102IN1102&output=search&q=geirangerfjord&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetxLMeWi1u_d0OMRvkClUba76WL62NDKV-tuv6_wPYBCwn1PrrOfPs6OFYogAUA80B4Yeha5pv5HQKE99i_gbVk5y48-T74Rw_QhLJlisoecmTxOGxOf3S0GfNHqCj0vsbNJqTA9AYWxKeLLUopN4jStcGBe5E7XJAqfVWsv2DM8NrOPXg&entry=mc&ved=1t:200715&ictx=111"
          location="Geirangerfjord"
          date="01 Oct, 2024 - 18 Nov, 2024"
          desc="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
        />
      </main>
    </>
  )
}

export default App
