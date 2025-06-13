import Head from 'next/head';
import { useState } from 'react';
import { FaFish, FaLeaf, FaBrush, FaInfoCircle, FaClipboardList, FaBoxOpen, FaFacebookF, FaInstagram, FaTwitter, FaTimes, FaWater, FaTemperatureHigh, FaFilter } from 'react-icons/fa';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>FishBox – 每月水族馆订阅盒</title>
        <meta
          name="description"
          content="每月一盒，惊喜游进你的鱼缸！优质鱼食、水族装饰和清洁工具直送上门。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="fixed w-full z-50 bg-gradient-to-r from-ocean to-mint py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-white">FishBox</h1>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gradient-to-r from-ocean to-mint md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0 space-y-4 md:space-y-0`}>
            <a href="#" className="text-white hover:text-sun transition duration-300 ease-in-out mx-4">订阅计划</a>
            <a href="#" className="text-white hover:text-sun transition duration-300 ease-in-out mx-4">鱼缸灵感</a>
            <a href="#" className="text-white hover:text-sun transition duration-300 ease-in-out mx-4">联系我们</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden text-2xl text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="切换菜单"
            >
              {isMenuOpen ? <FaTimes /> : '☰'}
            </button>
            <button className="ml-auto bg-sun hover:bg-[#e6c536] text-ocean font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
              立即订阅
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-ocean-200 via-mint-100 to-sun-50 text-center py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-6xl md:text-7xl font-extrabold text-ocean mb-4 animate-fade-in">
              每月一盒，惊喜游进你的鱼缸！
            </h2>
            <p className="text-xl text-gray-700 mb-8 animate-fade-in delay-100">
              探索每月送货上门的优质水族用品、装饰品和专家提示。
            </p>
            <button className="bg-coral hover:bg-[#e64545] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
              立即订阅
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-20 py-16">
          <h3 className="col-span-full text-3xl font-bold text-center text-ocean mb-12 animate-fade-in">
            盒子里有什么？
          </h3>
          {[
            {
              icon: <FaFish className="text-6xl mb-4 text-ocean animate-fade-in" />,
              title: "优质鱼食",
              description: "为您的水生朋友提供高品质、营养均衡的鱼食。"
            },
            {
              icon: <FaLeaf className="text-6xl mb-4 text-ocean animate-fade-in" />,
              title: "水族造景装饰",
              description: "美丽的植物和装饰创造令人惊叹的水下景观。"
            },
            {
              icon: <FaBrush className="text-6xl mb-4 text-ocean animate-fade-in" />,
              title: "清洁工具",
              description: "维持清洁、健康的水族环境的必备工具。"
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2">
              {feature.icon}
              <h4 className="text-2xl font-semibold mb-2 text-ocean">{feature.title}</h4>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* 张锦峰的鱼塘 */}
        <section className="bg-gradient-to-br from-ocean-100 to-mint-50 py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-20">
            <h3 className="text-3xl font-bold text-center text-ocean mb-12 animate-fade-in">
              张锦峰的鱼塘
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                  <div className="flex items-center space-x-4 mb-4">
                    <FaWater className="text-4xl text-ocean" />
                    <h4 className="text-xl font-semibold text-ocean">水质管理</h4>
                  </div>
                  <p className="text-gray-600">定期检测水质参数，保持水质稳定，为鱼儿创造最佳生活环境。</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                  <div className="flex items-center space-x-4 mb-4">
                    <FaTemperatureHigh className="text-4xl text-coral" />
                    <h4 className="text-xl font-semibold text-ocean">温度控制</h4>
                  </div>
                  <p className="text-gray-600">精确控制水温，确保热带鱼在最适宜的温度下生活。</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                  <div className="flex items-center space-x-4 mb-4">
                    <FaFilter className="text-4xl text-mint" />
                    <h4 className="text-xl font-semibold text-ocean">过滤系统</h4>
                  </div>
                  <p className="text-gray-600">高效过滤系统，保持水质清澈，为鱼儿提供健康的生活环境。</p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/fish-tank.jpg" 
                    alt="张锦峰的鱼塘" 
                    className="object-cover w-full h-full transform hover:scale-105 transition duration-300 ease-in-out"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-sun text-ocean px-6 py-3 rounded-lg shadow-lg">
                  <p className="font-bold">专业养鱼20年</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-4 md:px-20 py-16 bg-ocean-50">
          <h3 className="w-full text-3xl font-bold text-center text-ocean mb-12 animate-fade-in">
            它是如何运作的？
          </h3>
          {[
            {
              icon: <FaInfoCircle className="text-3xl" />,
              title: "告诉我们您的鱼缸",
              description: "分享鱼缸尺寸和鱼种，让我们个性化推荐。"
            },
            {
              icon: <FaClipboardList className="text-3xl" />,
              title: "选择订阅计划",
              description: "灵活套餐，随心搭配您的需求。"
            },
            {
              icon: <FaBoxOpen className="text-3xl" />,
              title: "每月开箱",
              description: "享受惊喜盒子，惊艳您的水下世界。"
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-opacity-80 p-6 rounded-xl text-center flex-1 transition-transform hover:scale-105 duration-300">
              <div className="bg-sun text-white p-4 rounded-full inline-block mb-4">
                {step.icon}
              </div>
              <h5 className="text-xl font-semibold mb-2 text-ocean">{step.title}</h5>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </section>

        {/* Testimonials */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20 py-16">
          <h3 className="col-span-full text-3xl font-bold text-center text-ocean mb-12 animate-fade-in">
            鱼友怎么说？
          </h3>
          {[
            {
              text: '我的孔雀鱼爱上了这份盒子，每个月都有新奇的装饰！峰哥太牛逼了。',
              author: '侯朝元',
            },
            {
              text: '这些水族装饰太美了，完全提升了我的鱼缸颜值！峰哥太会养鱼了。',
              author: '王坤',
            },
            {
              text: '鱼食品质超赞，水质明显改善，太值了！峰哥太会养了。',
              author: '小南',
            },
          ].map(({ text, author }, idx) => (
            <div key={idx} className="bg-mint-50 rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <p className="text-gray-700 italic mb-4">"{text}"</p>
              <p className="font-semibold text-right text-ocean">— {author}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ocean py-10 text-white px-4 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-2">FishBox</h5>
            <p className="text-mint-100">每月一盒，惊喜游进你的鱼缸！</p>
          </div>
          <div className="flex flex-col mb-6 md:mb-0">
            <a href="#" className="hover:text-sun transition duration-300 ease-in-out mb-2 block">常见问题</a>
            <a href="#" className="hover:text-sun transition duration-300 ease-in-out mb-2 block">联系我们</a>
            <a href="#" className="hover:text-sun transition duration-300 ease-in-out mb-2 block">隐私政策</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl hover:text-sun transition duration-300 mx-2" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="text-2xl hover:text-sun transition duration-300 mx-2" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="text-2xl hover:text-sun transition duration-300 mx-2" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-mint-100">© 2025 FishBox. 保留所有权利.</div>
      </footer>
    </>
  );
}