import React from 'react'

export default function NoMore() {
  return (
    <div className='flex flex-col gap-4 w-full md:flex-row max-w-[1440px] mx-auto px-4'>
      <div className='w-[50%] flex flex-col gap-4'>
        <h1 className='text-xl font-medium'>Немного о нас</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing nec senectus duis nibh. In faucibus adipiscing tellus enim, consequat integer accumsan. Ultrices ipsum nulla consequat malesuada enim mollis est. </p>
        <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing nec senectus duis nibh. In faucibus adipiscing tellus enim, consequat integer accumsan. Ultrices ipsum nulla consequat malesuada enim mollis est. Venenatis, sagittis, amet ornare donec purus suscipit nam sodales. Varius sit amet nullam dictumst massa consequat odio faucibus. </p>
      </div>
      <div className='w-[50%] p-5'>
        <img src="https://s3-alpha-sig.figma.com/img/94f6/b8ea/8814da4a1b287709152788b5816ba08e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMFCHui-TGiytPPfncta42pRbpzX69eCLS7E3-bJBOE7QnTQSgZcnjx41iq8DkRJ6D1XsmHt-PURrqsTmrcF83C6OO2vffPhGMm4aJSCd0QqPAuCf2Wiufm~JCsV9u9-sIEdGOrsBr5k4uxKp~9XpUqOETWDd5ofHATuSRK8T3obXr7vN2AG6q40JIIXU24ixuXP5pdwMKoUHUV1f8yp85QGmol~n80hCNIxYWb6BGdBZvtPIQgg~e-u1ALY1rMJg5qiXaJA6dinCGB1dYCHk7G8gtAt3ug~NyQltzf8mChp2CeVcuLUNAoJV2dMNvXLOvH98elcFL97RC8ROqaSzg__" alt="" />
      </div>
    </div>
  )
}
