import React, { useState, useEffect } from 'react';

const RepairReplaceCalc = () => {
    const [appliancePrice, setAppliancePrice] = useState(1200);
    const [applianceAge, setApplianceAge] = useState(5);
    const [repairCost, setRepairCost] = useState(400);
    const [applianceType, setApplianceType] = useState('washing-machine');
    const [decision, setDecision] = useState({ action: '', color: '', reason: '' });

    const applianceLifespans = {
        'washing-machine': 10,
        'fridge': 12,
        'dishwasher': 9,
        'dryer': 11,
        'oven': 15,
        'microwave': 7
    };

    useEffect(() => {
        calculateDecision();
    }, [appliancePrice, applianceAge, repairCost, applianceType]);

    const calculateDecision = () => {
        const lifespan = applianceLifespans[applianceType] || 10;
        const remainingLife = lifespan - applianceAge;

        // The 50 percent Rule - If repair is > 50 percent of new price AND age is > 50 percent of lifespan, replace.
        const costRatio = repairCost / appliancePrice;
        const ageRatio = applianceAge / lifespan;

        if (ageRatio >= 0.8) {
            setDecision({
                action: 'REPLACE',
                color: 'text-rose-500',
                reason: 'This unit is at the end of its mechanical life. Any repair is a temporary patch on a sinking ship.'
            });
        } else if (costRatio > 0.5 andand ageRatio > 0.5) {
            setDecision({
                action: 'REPLACE',
                color: 'text-rose-500',
                reason: 'The repair cost exceeds 50% of a new model, and the unit is mid-life. Better to invest in a new warranty.'
            });
        } else if (costRatio < 0.3) {
            setDecision({
                action: 'REPAIR',
                color: 'text-success',
                reason: 'This is a high-value repair. The cost is low compared to a replacement. Send it!'
            });
        } else {
            setDecision({
                action: 'REPAIR (CONSIDER)',
                color: 'text-primary',
                reason: 'It is borderline. If the unit is a premium brand (Miele/Bosch), fix it. If it is a budget brand, consider replacing.'
            });
        }
    };

    return (
        <div className='bg-background border-2 border-foreground rounded-3xl p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]'>
            <div className='flex items-center gap-3 mb-8'>
                <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white text-xl'>⚖️</div>
                <h2 className='text-3xl font-black uppercase tracking-tighter italic'>Repair vs Replace <span className='text-primary'>Scorecard</span></h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                <div className='space-y-6'>
                    <div>
                        <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Appliance Type</label>
                        <select
                            value={applianceType}
                            onChange={(e) => setApplianceType(e.target.value)}
                            className='w-full bg-foreground/5 border-2 border-foreground/10 rounded-xl p-3 font-bold tech-mono focus:border-primary outline-none transition-all appearance-none text-xs'
                        >
                            {Object.keys(applianceLifespans).map(type => (
                                <option key={type} value={type}>{type.replace('-', ' ').toUpperCase()}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>New Model Price ($)</label>
                        <input
                            type='number' value={appliancePrice}
                            onChange={(e) => setAppliancePrice(parseInt(e.target.value))}
                            className='w-full bg-foreground/5 border-2 border-foreground/10 rounded-xl p-3 font-bold tech-mono focus:border-primary outline-none transition-all'
                        />
                    </div>
                </div>

                <div className='space-y-6'>
                    <div>
                        <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Current Age (Years)</label>
                        <input
                            type='number' value={applianceAge}
                            onChange={(e) => setApplianceAge(parseInt(e.target.value))}
                            className='w-full bg-foreground/5 border-2 border-foreground/10 rounded-xl p-3 font-bold tech-mono focus:border-primary outline-none transition-all'
                        />
                    </div>

                    <div>
                        <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Estimated Repair Cost ($)</label>
                        <input
                            type='number' value={repairCost}
                            onChange={(e) => setRepairCost(parseInt(e.target.value))}
                            className='w-full bg-foreground/5 border-2 border-foreground/10 rounded-xl p-3 font-bold tech-mono focus:border-primary outline-none transition-all'
                        />
                    </div>
                </div>
            </div>

            <div className='bg-foreground text-background rounded-2xl p-10 text-center relative overflow-hidden'>
                <span className='block text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-4'>The Technician Consensus:</span>
                <div className={`text-6xl md:text-8xl font-black italic tracking-tighter mb-6 ${decision.color}`}>
                    {decision.action}
                </div>
                <p className='text-xl font-bold max-w-xl mx-auto leading-tight italic'>
                    '{decision.reason}'
                </p>

                <div className='mt-10 flex justify-center gap-4'>
                    {decision.action.includes('REPLACE') ? (
                        <a href='#replacement-deals' className='px-6 py-3 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-all'>Find New Models Local</a>
                    ) : (
                        <a href='#repair-parts' className='px-6 py-3 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-all'>Get Repair Parts</a>
                    )}
                </div>

                {/* Subtle decorative grid */}
                <div className='absolute inset-0 opacity-10 pointer-events-none' style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </div>
        </div>
    );
};

export default RepairReplaceCalc;

