'use client';

import { useState } from 'react';

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface StepItem {
  number: number;
  title: string;
  description: string;
}

interface FeatureItem {
  id: number;
  name: string;
  description: string;
}

type TabKey = 'request' | 'profile' | 'warranty' | 'locations';

const tabItems: { key: TabKey; label: string; icon: string }[] = [
  { key: 'request', label: 'รายการคำขอ', icon: '📋' },
  { key: 'profile', label: 'ประวัติช่าง', icon: '👨‍💻' },
  { key: 'warranty', label: 'การรับประกัน', icon: '🛡️' },
  { key: 'locations', label: 'ที่ตั้งสาขา', icon: '📍' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>('request');

  const services: ServiceCard[] = [
    {
      id: 1,
      title: 'ซ่อมคอมพิวเตอร์',
      description: 'ซ่อมแซมและบำรุงรักษาคอมพิวเตอร์ทั้งแบบเดสก์ทอป และแล็ปท็อป',
      icon: '💻',
    },
    {
      id: 2,
      title: 'ซ่อมเครื่องพิมพ์',
      description: 'บริการซ่อมเครื่องพิมพ์ต่าง ๆ และเติมหมึก ด้วยอุปกรณ์คุณภาพ',
      icon: '🖨️',
    },
    {
      id: 3,
      title: 'ซ่อมเน็ตเวิร์ค',
      description: 'ตรวจเช็ค ติดตั้ง และซ่อมแซมระบบเน็ตเวิร์คบริษัท',
      icon: '🌐',
    },
    {
      id: 4,
      title: 'ซ่อมสมาร์ทโฟน',
      description: 'ซ่อมหน้าจอ แบตเตอรี่ และปัญหาต่างๆ ของสมาร์ทโฟน',
      icon: '📱',
    },
  ];

  const steps: StepItem[] = [
    {
      number: 1,
      title: 'สร้างคำขอซ่อม',
      description: 'กรอกข้อมูลอุปกรณ์และปัญหาที่เกิดขึ้น',
    },
    {
      number: 2,
      title: 'รับการยืนยัน',
      description: 'ทีมงานจะติดต่อยืนยันและประมาณราคา',
    },
    {
      number: 3,
      title: 'นำอุปกรณ์มา',
      description: 'นำอุปกรณ์มายังศูนย์บริการของเรา',
    },
    {
      number: 4,
      title: 'ติดตามความคืบหน้า',
      description: 'ติดตามสถานะการซ่อมผ่านแอปพลิเคชัน',
    },
  ];

  const features: FeatureItem[] = [
    {
      id: 1,
      name: 'ราคาชอบธรรม',
      description: 'ราคาโปร่งใส ไม่มีค่าใช้งานซ่อนเร้น',
    },
    {
      id: 2,
      name: 'ช่างเชี่ยวชาญ',
      description: 'ช่างซ่อมมีประสบการณ์และใบรับรองความสามารถ',
    },
    {
      id: 3,
      name: 'บริการรวดเร็ว',
      description: 'ซ่อมเสร็จภายใน 1-3 วันทำการ',
    },
    {
      id: 4,
      name: 'รับประกันการซ่อม',
      description: 'รับประกันซ่อมเป็นเวลา 3 เดือน',
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'request':
        return (
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">คำขอซ่อมที่เปิดล่าสุด</p>
            <ul className="space-y-3">
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
                <p className="font-semibold">💻 คอมพิวเตอร์ไม่เปิด</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">สถานะ: รอตรวจสอบ</p>
              </li>
              <li className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
                <p className="font-semibold">📱 หน้าจอแตก</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">สถานะ: ประมาณราคาแล้ว</p>
              </li>
            </ul>
          </div>
        );
      case 'profile':
        return (
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">ทีมช่างของเรา</p>
            <p className="text-sm">ทีมงานมีประสบการณ์ด้านซ่อมอุปกรณ์ IT ครบวงจร ทั้งฮาร์ดแวร์และซอฟต์แวร์ พร้อมบริการลูกค้าอย่างมืออาชีพ</p>
          </div>
        );
      case 'warranty':
        return (
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">การรับประกัน</p>
            <p className="text-sm">บริการซ่อมทุกประเภทมาพร้อมการรับประกัน 3 เดือน และการตรวจเช็คซ้ำฟรีภายในระยะเวลาที่กำหนด</p>
          </div>
        );
      case 'locations':
        return (
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">สาขาใกล้คุณ</p>
            <p className="text-sm">สาขาหลักอยู่เชียงใหม่ พร้อมให้บริการทั้งลูกค้าประจำและ walk-in</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-6">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                🔧 TechRepair
              </div>
              <button className="md:hidden text-slate-600 dark:text-slate-300">
                ☰
              </button>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600">
                🛠️ บริการ
              </a>
              <a href="#how-it-works" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600">
                📘 วิธีใช้งาน
              </a>
              <a href="#contact" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600">
                📞 ติดต่อเรา
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-12 md:py-24 xl:py-28">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/90 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/80 dark:text-blue-200">
              <span>🚀</span>
              ระบบซ่อมที่รวดเร็วและเชื่อถือได้
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                บริการซ่อมอุปกรณ์ไอทีออนไลน์ สำหรับองค์กรและบุคคลทั่วไป
              </h1>
              <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto md:mx-0">
                จองคิวออนไลน์ ดูสถานะได้ทันที พร้อมบริการซ่อมทั้งคอมพิวเตอร์, โน้ตบุ๊ก, เครื่องพิมพ์, สมาร์ทโฟน และระบบเน็ตเวิร์ก
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
                📩 สร้างคำขอซ่อม
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-600 bg-transparent px-8 py-3 text-blue-600 transition hover:bg-blue-50 dark:text-blue-300 dark:hover:bg-slate-800">
                🔎 ดูบริการเพิ่มเติม
              </button>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 text-left">
              <div className="rounded-3xl bg-slate-50 p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-2">ความเชื่อถือ</p>
                <p className="font-semibold text-slate-900 dark:text-white">บริการโปร่งใส</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-2">เวลา</p>
                <p className="font-semibold text-slate-900 dark:text-white">ตอบไวใน 24 ชั่วโมง</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 mb-2">การรับประกัน</p>
                <p className="font-semibold text-slate-900 dark:text-white">3 เดือนเต็ม</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-800 dark:bg-slate-950">
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-3 rounded-3xl bg-slate-50 p-3 dark:bg-slate-900">
                {tabItems.map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex items-center justify-center gap-2 rounded-2xl px-3 py-3 text-sm font-semibold transition ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-200/50 dark:shadow-none'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 py-12 md:py-20 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            บริการของเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-6 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            วิธีใช้งาน
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-center text-sm mb-4">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-full h-1 bg-blue-300 dark:bg-blue-700 mb-4 -mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-12 md:py-20 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            เหตุผลที่เลือกเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 md:py-20 bg-linear-to-r from-blue-600 to-blue-700">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            พร้อมที่จะซ่อมอุปกรณ์ของคุณแล้วหรือ?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            สร้างคำขอซ่อมวันนี้และรับการบริการที่ดีที่สุด
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors text-lg">
            สร้างคำขอซ่อมเลย
          </button>
        </div>
      </section>

      {/* Profile Section */}
      <section className="px-4 py-12 md:py-20 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white dark:bg-slate-800 shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 h-32 w-32 rounded-3xl bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
                อ
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 mb-3">
                  ประวัติผู้พัฒนาเว็บ
                </p>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  อนุรักษ์ บุตรวิชา
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg mb-4">
                  ระดับ ปวส.1/4 นักศึกษาชำนาญด้านคอมพิวเตอร์ พร้อมให้บริการออกแบบ และพัฒนาระบบออนไลน์สำหรับธุรกิจและบริการซ่อมไอที
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700 dark:text-slate-300">
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-700 p-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2">ระดับ</p>
                    <p className="font-semibold">ปวส.1/4</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-700 p-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2">ความเชี่ยวชาญ</p>
                    <p className="font-semibold">ด้านคอมพิวเตอร์</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-700 p-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2">ทักษะ</p>
                    <p className="font-semibold">ออกแบบเว็บ, พัฒนาแอปพลิเคชัน, ระบบซ่อม</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-4 py-12 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ติดต่อเรา</h3>
              <p className="text-slate-300">☎️ 02-XXX-XXXX</p>
              <p className="text-slate-300">📧 contact@techrepair.co.th</p>
              <p className="text-slate-300">📍 เชียงใหม่ ประเทศไทย</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">เวลาเปิด</h3>
              <p className="text-slate-300">จันทร์ - ศุกร์: 09:00 - 18:00</p>
              <p className="text-slate-300">เสาร์ - อาทิตย์: 10:00 - 16:00</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">ทำตามเรา</h3>
              <div className="flex gap-4">
                <a href="#" className="text-slate-300 hover:text-white">Facebook</a>
                <a href="#" className="text-slate-300 hover:text-white">Line</a>
                <a href="#" className="text-slate-300 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2024 TechRepair. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-6xl px-4 pb-4 pt-2 backdrop-blur-sm md:hidden">
        <div className="rounded-3xl border border-slate-200 bg-white/95 shadow-lg shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-950/95">
          <div className="grid grid-cols-4 gap-1 p-2">
            {tabItems.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-xs font-semibold transition ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
