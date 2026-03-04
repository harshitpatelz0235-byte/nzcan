import React, { useState, useEffect } from 'react';

const IspRipoffDetector = () => {
  const [isp, setIsp] = useState('bell');
  const [planSpeed, setPlanSpeed] = useState(1000);
  const [actualSpeed, setActualSpeed] = useState(600);
  const [monthlyPrice, setMonthlyPrice] = useState(115);
  const [result, setResult] = useState({ score: 0, status: '', message: '', credit: 0 });

  useEffect(() => {
    calculateRipoff();
  }, [isp, planSpeed, actualSpeed, monthlyPrice]);

  const calculateRipoff = () => {
    const performanceRatio = actualSpeed / planSpeed;
    let score = Math.round(performanceRatio * 100);
    let status = 'Fair';
    let message = '';
    let credit = 0;

    if (performanceRatio < 0.5) {
      status = 'CRITICAL RIP-OFF';
      message = `You are paying for ${planSpeed}Mbps but only getting ${actualSpeed}Mbps. This is technically actionable.`;
      credit = monthlyPrice * 0.5;
    } else if (performanceRatio < 0.8) {
      status = 'UNDERPERFORMING';
      message = 'Your ISP is throttling you or your hardware is failing. You are overpaying for the speed you receive.';
      credit = monthlyPrice * 0.2;
    } else {
      status = 'OPTIMIZED';
      message = 'Your connection is healthy. You are getting what you pay for.';
      credit = 0;
    }

    setResult({ score, status, message, credit: credit.toFixed(2) });
  };

  return (
    <div className='bg-background border-2 border-foreground rounded-3xl p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]'>
      <div className='flex items-center gap-3 mb-8'>
        <div className='w-10 h-10 bg-[#FF0000] rounded-lg flex items-center justify-center text-white text-xl'>🇨🇦</div>
        <h2 className='text-3xl font-black uppercase tracking-tighter italic'>ISP <span className='text-primary'>Rip-off Detector</span></h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
        <div className='space-y-6'>
          <div>
            <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Select Your ISP</label>
            <select
              value={isp}
              onChange={(e) => setIsp(e.target.value)}
              className='w-full bg-foreground/5 border-2 border-foreground/10 rounded-xl p-3 font-bold tech-mono focus:border-primary outline-none transition-all appearance-none text-xs'
            >
              <option value='bell'>Bell Canada</option>
              <option value='rogers'>Rogers Communications</option>
              <option value='telus'>Telus</option>
              <option value='cogeco'>Cogeco</option>
              <option value='shaw'>Shaw</option>
              <option value='spark'>Spark (NZ)</option>
              <option value='one'>One NZ</option>
            </select>
          </div>

          <div>
            <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Advertised Plan Speed (Mbps)</label>
            <input
              type='number' value={planSpeed}
              onChange={(e) => setPlanSpeed(parseInt(e.target.value))}
              className='w-full bg-foreground/5 border-2 border-foreground/10 rounded-xl p-3 font-bold tech-mono focus:border-primary outline-none transition-all'
            />
          </div>
        </div>

        <div className='space-y-6'>
          <div>
            <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Actual Speed Found (Mbps)</label>
            <input
              type='number' value={actualSpeed}
              onChange={(e) => setActualSpeed(parseInt(e.target.value))}
              className='w-full bg-foreground/5 border-2 border-foreground/10 rounded-xl p-3 font-bold tech-mono focus:border-primary outline-none transition-all'
            />
            <p className='text-[9px] text-foreground/40 mt-1 uppercase font-bold'>Check speed at fast.com first</p>
          </div>

          <div>
            <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Monthly Bill Price ($)</label>
            <input
              type='number' value={monthlyPrice}
              onChange={(e) => setMonthlyPrice(parseInt(e.target.value))}
              className='w-full bg-foreground/5 border-2 border-foreground/10 rounded-xl p-3 font-bold tech-mono focus:border-primary outline-none transition-all'
            />
          </div>
        </div>
      </div>

      <div className='bg-foreground text-background rounded-2xl p-8 relative overflow-hidden'>
        <div className='flex flex-col md:flex-row items-center gap-8 relative z-10'>
          <div className={`w-32 h-32 rounded-full border-8 flex flex-col items-center justify-center ${result.score < 50 ? 'border-rose-500' : 'border-primary'}`}>
            <span className='text-4xl font-black tech-mono'>{result.score}%</span>
            <span className='text-[8px] font-black uppercase tracking-widest leading-none'>Efficiency</span>
          </div>

          <div className='flex-1 text-center md:text-left'>
            <span className={`block text-xs font-black uppercase tracking-widest mb-2 ${result.score < 50 ? 'text-rose-500' : 'text-primary'}`}>Status: {result.status}</span>
            <h3 className='text-2xl font-black uppercase italic tracking-tighter mb-2 leading-none'>{result.message}</h3>
            {parseFloat(result.credit) > 0 && (
              <div className='mt-4 p-4 bg-background/10 rounded-xl border border-background/20 inline-block'>
                <p className='text-sm font-bold'>Suggested Bill Credit: <span className='text-primary tech-mono'>${result.credit}</span></p>
                <a href='#negotiation-script' className='text-[10px] font-black uppercase underline tracking-widest mt-1 block hover:text-primary'>Get Negotiation Script</a>
              </div>
            )}
          </div>
        </div>

        {/* Subtle decorative grid */}
        <div className='absolute inset-0 opacity-10 pointer-events-none' style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>
    </div>
  );
};

export default IspRipoffDetector;

