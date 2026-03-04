import React, { useState, useEffect } from 'react';

const HeatPumpCalc = () => {
    const [roomSize, setRoomSize] = useState(25);
    const [insulation, setInsulation] = useState('average');
    const [usageHours, setUsageHours] = useState(6);
    const [electricityRate, setElectricityRate] = useState(0.32);
    const [maintenanceLevel, setMaintenanceLevel] = useState('good');
    const [results, setResults] = useState({ daily: 0, monthly: 0, yearly: 0, penalty: 0 });

    useEffect(() => {
        calculateCosts();
    }, [roomSize, insulation, usageHours, electricityRate, maintenanceLevel]);

    const calculateCosts = () => {
        // Base heating requirement (Watts per sq meter)
        let baseWatts = 120; // Default for 2.4m ceiling
        if (insulation === 'poor') baseWatts = 160;
        if (insulation === 'excellent') baseWatts = 80;

        const totalWattsRequired = roomSize * baseWatts;

        // Average Heat Pump COP (Coefficient of Performance) in 2026 NZ
        // 1kW electricity = 3.5kW heat
        const avgCOP = 3.5;

        // Maintenance Penalty (ErrorDocs Secret Sauce)
        let penaltyMultiplier = 1.0;
        if (maintenanceLevel === 'dirty') penaltyMultiplier = 1.25; // 25% efficiency loss
        if (maintenanceLevel === 'neglected') penaltyMultiplier = 1.50; // 50% efficiency loss

        const electricityUsageKW = (totalWattsRequired / 1000 / avgCOP) * penaltyMultiplier;

        const dailyCost = electricityUsageKW * usageHours * electricityRate;
        const monthlyCost = dailyCost * 30.44;
        const yearlyCost = dailyCost * 365;
        const penaltyCost = monthlyCost - (monthlyCost / penaltyMultiplier);

        setResults({
            daily: dailyCost.toFixed(2),
            monthly: monthlyCost.toFixed(2),
            yearly: yearlyCost.toFixed(2),
            penalty: penaltyCost.toFixed(2)
        });
    };

    return (
        <div className='bg-background border-2 border-foreground rounded-3xl p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]'>
            <div className='flex items-center gap-3 mb-8'>
                <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white text-xl'>🇳🇿</div>
                <h2 className='text-3xl font-black uppercase tracking-tighter italic'>Heat Pump <span className='text-primary'>Cost Master</span></h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                <div className='space-y-6'>
                    <div>
                        <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Room Size (m²)</label>
                        <input
                            type='range' min='10' max='100' value={roomSize}
                            onChange={(e) => setRoomSize(parseInt(e.target.value))}
                            className='w-full h-2 bg-foreground/10 rounded-lg appearance-none cursor-pointer accent-primary'
                        />
                        <div className='flex justify-between mt-2 font-bold tech-mono text-sm'>
                            <span>10m²</span>
                            <span className='text-primary'>{roomSize}m²</span>
                            <span>100m²</span>
                        </div>
                    </div>

                    <div>
                        <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Insulation Quality</label>
                        <div className='grid grid-cols-3 gap-2'>
                            {['poor', 'average', 'excellent'].map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setInsulation(level)}
                                    className={`py-2 text-[10px] font-black uppercase rounded-md border-2 transition-all ${insulation === level ? 'bg-foreground text-background border-foreground' : 'border-foreground/10 hover:border-foreground/40'}`}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Daily Usage (Hours)</label>
                        <input
                            type='number' value={usageHours}
                            onChange={(e) => setUsageHours(parseInt(e.target.value))}
                            className='w-full bg-foreground/5 border-2 border-foreground/10 rounded-xl p-3 font-bold tech-mono focus:border-primary outline-none transition-all'
                        />
                    </div>
                </div>

                <div className='space-y-6'>
                    <div>
                        <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Electricity Rate ($/kWh)</label>
                        <input
                            type='number' step='0.01' value={electricityRate}
                            onChange={(e) => setElectricityRate(parseFloat(e.target.value))}
                            className='w-full bg-foreground/5 border-2 border-foreground/10 rounded-xl p-3 font-bold tech-mono focus:border-primary outline-none transition-all'
                        />
                    </div>

                    <div>
                        <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Unit Maintenance</label>
                        <select
                            value={maintenanceLevel}
                            onChange={(e) => setMaintenanceLevel(e.target.value)}
                            className='w-full bg-foreground/5 border-2 border-foreground/10 rounded-xl p-3 font-bold tech-mono focus:border-primary outline-none transition-all appearance-none uppercase text-xs'
                        >
                            <option value='good'>Clean Filters (Optimized)</option>
                            <option value='dirty'>Dusty/Dirty Filters (+25% Cost)</option>
                            <option value='neglected'>Neglected/Blocked (+50% Cost)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='bg-foreground text-background rounded-2xl p-8 relative overflow-hidden'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10'>
                    <div>
                        <span className='block text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-1'>Weekly Estimate</span>
                        <span className='text-3xl font-black tech-mono'>${(results.daily * 7).toFixed(2)}</span>
                    </div>
                    <div>
                        <span className='block text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-1'>Monthly Estimate</span>
                        <span className='text-4xl font-black tech-mono text-primary'>${results.monthly}</span>
                    </div>
                    <div>
                        <span className='block text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-1'>Yearly Estimate</span>
                        <span className='text-3xl font-black tech-mono'>${results.yearly}</span>
                    </div>
                </div>

                {parseFloat(results.penalty) > 0 && (
                    <div className='mt-8 pt-8 border-t border-background/10 relative z-10'>
                        <div className='flex items-center gap-2 text-rose-400 mb-1'>
                            <span className='text-lg'>⚠️</span>
                            <span className='text-[10px] font-black uppercase tracking-widest'>Efficiency Penalty Found</span>
                        </div>
                        <p className='text-sm font-bold leading-tight'>
                            You are wasting <span className='text-rose-400 tech-mono'>${results.penalty}</span> per month due to poor maintenance.
                            <a href='#maintenance-guide' className='text-primary underline ml-2'>Clean your filters now.</a>
                        </p>
                    </div>
                )}

                {/* Subtle decorative grid */}
                <div className='absolute inset-0 opacity-10 pointer-events-none' style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </div>
        </div>
    );
};

export default HeatPumpCalc;

