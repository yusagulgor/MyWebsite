import React from 'react';
import mepoto from "../../assets/Mee.jpg";

const About = () => {
  const bgColor = '#003140';

  return (
    <div className='h-screen flex justify-center items-center' style={{ backgroundColor: bgColor }}>
      <div className='ml-10 w-8/10 flex flex-row justify-between'>
        <div className='w-3/6 text-white text-regular-400 text-2xl p-6 mt-5 ml-10 rounded-lg'>
          <span>Hi, I'm </span><span style={{ color:'#EBB248' }}>Yüşa</span>
          <div className='mt-16'>
            <p>16 yaşındayım ve lisede okuyorum.</p>
            <p className='mt-2'>2021 yılından beri mekanik ve yazılım alanlarıyla ilgiliyim. 1 yıl boyunca şuan mentörü olduğum Fusion Robotics takımında mekanik kaptanlığı yaptım </p>
            <p className='mt-2'>2023 yılının Aralık ayından itibaren yapay zeka ile ilgilenmeye/kodlamaya başladım.</p>
            <p className='mt-3'>Yandaki fotoğraf benim kazandığım 'Duyarlı profesyonellik' ve 'All Star Safety Award' içindir.</p>
            <p className='mt-5'>İlgilendiğim alanlar şunlar:</p><br />
            <p className='mt-2'>FRC robot build, Deep Learning and more</p>
            <p className='mt-4'>Detaylı bilgi için <a target='_blank' href="https://www.linkedin.com/in/y%C3%BC%C5%9Fa-mervan-g%C3%BClg%C3%B6r-9685a323b/" rel="noreferrer" style={{ color: "#0077B5" }}>Linkedin</a>
            /<a target='_blank' href="https://github.com/yusagulgor" rel="noreferrer" style={{ color: "#000000" }}>Github</a>/
            <a href="yusagulgor@gmail.com" style={{color:'#EBB248'}}>yusagulgor@gmail.com</a> adreslerime bakabilir veya iletişime geçebilirsiniz.</p>
          </div> 
        </div>

        <div className='flex rounded-lg justify-end mr-40'>
          <img
            src={mepoto}
            alt=''
            style={{ borderRadius: 50, inlineSize: 500 }} 
            className='shadow-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
