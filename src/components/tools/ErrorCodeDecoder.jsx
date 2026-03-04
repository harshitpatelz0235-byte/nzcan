import React, { useState } from 'react';

const ErrorCodeDecoder = () => {
    const [brand, setBrand] = useState('any');
    const [code, setCode] = useState('');
    const [result, setResult] = useState(null);

    const errorDatabase = {
        'fisher-paykel': {
            'E30': {
                fix: 'Drain pump blockage detected.',
                action: 'Unplug the machine, remove the bottom kick-plate, and unscrew the pump filter. Clear any debris (coins, hairpins).',
                tools: '10mm Socket (NZ/CA)',
                localStore: { nz: 'Mitre 10', ca: 'Canadian Tire' }
            },
            'F1': {
                fix: 'Flood switch activated.',
                action: 'Tilt the machine forward 45 degrees to drain water from the base tray. If it recurs, check the inlet valve.',
                tools: 'Towel, Floor Protection',
                localStore: { nz: 'Bunnings', ca: 'Home Depot Canada' }
            }
        },
        'samsung': {
            '5C': {
                fix: 'Drainage Error / Filter Clogged.',
                action: 'Clean the debris filter at the bottom front. Ensure the drain hose is not kinked.',
                tools: 'Shallow Tray (for water)',
                localStore: { nz: 'Noel Leeming', ca: 'Best Buy Canada' }
            },
            '4C': {
                fix: 'Water Supply Issue.',
                action: 'Check that the water tap is fully open and the inlet mesh filter is not blocked with sediment.',
                tools: 'Plier',
                localStore: { nz: 'PB Tech (Tools)', ca: 'Canadian Tire' }
            }
        },
        'bosch': {
            'E18': {
                fix: 'Drain pump blocked or timed out.',
                action: 'Open the service flap, unscrew the pump cover, and check the impeller for obstructions.',
                tools: 'None (Hand-tight)',
                localStore: { nz: 'Bunnings', ca: 'Home Depot Canada' }
            },
            'E15': {
                fix: 'Water in the base (leak detected).',
                action: 'Dry the base of the machine. Usually caused by using too much detergent or a leaking seal.',
                tools: 'Wet/Dry Vac (Optional)',
                localStore: { nz: 'Hirepool (NZ)', ca: 'Best Buy Canada' }
            }
        },
        'lg': {
            'OE': {
                fix: 'Drain error.',
                action: 'Check if the drain pump is humming. If not, it likely needs replacement. Clear the filter first.',
                tools: 'Philips Screwdriver',
                localStore: { nz: 'Noel Leeming', ca: 'Canadian Tire' }
            },
            'IE': {
                fix: 'Inlet error (No water).',
                action: 'Ensure the hose is not frozen (common in CA winters) or kinked.',
                tools: 'Hairdryer (if frozen)',
                localStore: { nz: 'Mitre 10', ca: 'Home Depot' }
            }
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const searchCode = code.toUpperCase().trim();
        let found = null;

        if (brand !== 'any') {
            found = errorDatabase[brand]?.[searchCode];
        } else {
            // Search all brands
            for (const b in errorDatabase) {
                if (errorDatabase[b][searchCode]) {
                    found = errorDatabase[b][searchCode];
                    break;
                }
            }
        }

        if (found) {
            setResult(found);
        } else {
            setResult({
                fix: 'Code not found in 2026 database.',
                action: 'This may be a rare circuit board failure. Try a full 10-minute power isolation first.',
                tools: 'Multimeter',
                localStore: { nz: 'PB Tech', ca: 'Best Buy' }
            });
        }
    };

    return (
        <div className='bg-background border-2 border-foreground rounded-3xl p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]'>
            <div className='flex items-center gap-3 mb-8'>
                <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white text-xl'>🔍</div>
                <h2 className='text-3xl font-black uppercase tracking-tighter italic'>Error Code <span className='text-primary'>Decoder</span></h2>
            </div>

            <form onSubmit={handleSearch} className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-12'>
                <div>
                    <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Brand</label>
                    <select
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className='w-full bg-foreground/5 border-2 border-foreground/10 rounded-xl p-4 font-bold tech-mono focus:border-primary outline-none transition-all appearance-none text-xs uppercase'
                    >
                        <option value='any'>Any Brand</option>
                        <option value='fisher-paykel'>Fisher and Paykel</option>
                        <option value='samsung'>Samsung</option>
                        <option value='bosch'>Bosch</option>
                        <option value='lg'>LG</option>
                    </select>
                </div>

                <div className='md:col-span-2'>
                    <label className='block text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2'>Error Code (e.g. E30, 5C, OE)</label>
                    <div className='flex gap-2'>
                        <input
                            type='text'
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder='ENTER CODE...'
                            className='flex-1 bg-foreground/5 border-2 border-foreground/10 rounded-xl p-4 font-bold tech-mono focus:border-primary outline-none transition-all uppercase'
                        />
                        <button type='submit' className='bg-primary text-white font-black px-8 rounded-xl hover:scale-105 transition-all uppercase tracking-widest text-xs'>
                            Decode
                        </button>
                    </div>
                </div>
            </form>

            {result && (
                <div className='bg-foreground text-background rounded-2xl p-8 relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500'>
                    <div className='relative z-10'>
                        <div className='flex items-center gap-2 mb-4'>
                            <span className='px-2 py-0.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded'>Technical Result</span>
                            {result.tools && <span className='text-[10px] font-bold opacity-40 tech-mono uppercase'>Required: {result.tools}</span>}
                        </div>

                        <h3 className='text-3xl font-black uppercase italic tracking-tighter mb-4 text-primary leading-none'>
                            {result.fix}
                        </h3>

                        <p className='text-lg font-bold mb-8 leading-tight opacity-90 italic'>
                            '{result.action}'
                        </p>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-background/10'>
                            <div className='p-4 bg-background/5 rounded-xl border border-background/10'>
                                <span className='block text-[8px] font-black uppercase tracking-[0.2em] opacity-40 mb-2'>Buy Tools Locally (NZ)</span>
                                <p className='text-sm font-black uppercase tracking-tight'>{result.localStore.nz}</p>
                            </div>
                            <div className='p-4 bg-background/5 rounded-xl border border-background/10'>
                                <span className='block text-[8px] font-black uppercase tracking-[0.2em] opacity-40 mb-2'>Buy Tools Locally (CA)</span>
                                <p className='text-sm font-black uppercase tracking-tight'>{result.localStore.ca}</p>
                            </div>
                        </div>
                    </div>

                    {/* Subtle decorative grid */}
                    <div className='absolute inset-0 opacity-10 pointer-events-none' style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                </div>
            )}
        </div>
    );
};

export default ErrorCodeDecoder;

