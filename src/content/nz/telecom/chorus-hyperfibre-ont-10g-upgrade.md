---
title: 'Upgrading to Hyperfibre? The Chorus 10G Box Explained'
description: 'Thinking of upgrading your NZ broadband to a massive 2Gbps, 4Gbps, or 8Gbps Hyperfibre plan? Learn about the new Chorus Type 110 ONT you need, and the expensive home networking upgrades required to actually use those speeds.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/chorus-hyperfibre-ont-10g.png'
tags: ['Chorus', 'Hyperfibre', '10G ONT', 'Router Setup', 'CAT6', 'NZ Tech']
instantAnswer: 'Upgrading to Hyperfibre requires a Chorus technician to visit your home and physically swap your old ONT for the new Hyperfibre Type 110 ONT. To actually use speeds over 1Gbps, you MUST plug your computer directly into the specific "10GE" copper port on the new ONT. Furthermore, you must upgrade your home ethernet cables to CAT6 or CAT6a, and your PC motherboard must have a dedicated 2.5G, 5G, or 10G network interface card. Normal Wi-Fi will never reach Hyperfibre speeds.'
faqs:
  - question: 'What is the new Chorus Hyperfibre ONT?'
    answer: 'The standard Chorus ONT (Type 400) maxes out at 1Gbps (1000Mbps). When you order a 2Gbps, 4Gbps, or 8Gbps Hyperfibre plan in 2026, a technician installs the Type 110 Hyperfibre ONT. It is slightly larger, runs much hotter, and features a specialized 10-Gigabit Ethernet (10GE) port on the bottom to handle the massive data throughput.'
  - question: 'Do I need a new router for Hyperfibre?'
    answer: 'Yes. If you plug a standard ISP router into a Hyperfibre connection, the router CPU will literally bottleneck the connection at 1Gbps. You must purchase a highly specialized, expensive "Multi-Gig" router (like a high-end ASUS ROG or Ubiquiti system) featuring a 10Gbps WAN port and at least one 2.5Gbps or 10Gbps LAN port.'
  - question: 'Will Hyperfibre make my laptop Wi-Fi faster?'
    answer: 'No. The laws of physics prevent current Wi-Fi 6 wireless signals from surpassing roughly 800Mbps to 1.2Gbps in real-world conditions. Hyperfibre is designed strictly for hardwired desktop PCs, heavy home servers, or dividing massive bandwidth across a house of 10 people simultaneously.'
  - question: 'Can I use my old CAT5e cables?'
    answer: 'Technically, a very short, high-quality CAT5e cable can sometimes push 2.5Gbps. However, for a stable 4Gbps or 8Gbps Hyperfibre connection, you must rewire your house with heavily shielded CAT6 or CAT6a Ethernet cabling. Old CAT5 will fail to negotiate the higher speeds and drop your connection back to 1Gbps.'
---

# Upgrading to Hyperfibre? The Chorus 10G Box Explained

<div class='instant-fix-box'>
  <p>To successfully upgrade to Chorus Hyperfibre (2Gbps, 4Gbps, or 8Gbps) in New Zealand, getting the connection turned on is only step one. A technician must install a <strong>Type 110 ONT</strong>. You must then plug a specialized Multi-Gig router into the massive <strong>10GE port</strong> on the bottom of the unit. Finally, your entire internal home network—including the Ethernet cables in the walls (must be CAT6) and your computer's Network Card (must be 10GbE)—must be upgraded to handle the bandwidth.</p>
</div>

<AdSenseBlock slot='article-top' />

## The "Ferrari in a Traffic Jam" Problem

In 2026, New Zealand’s Chorus Fibre network is officially one of the fastest and most highly developed broadband networks on the planet. 

While the standard gigabit (1000Mbps) connection is fast enough for 99% of households, power users, video editors, and heavy gamers are now upgrading to the legendary **Hyperfibre** tiers: 2000Mbps, 4000Mbps, and even 8000Mbps.

However, many Kiwis order the 4000Mbps plan, wait weeks for the installation, run a speed test on their MacBook, and are horrified to see the needle stop exactly at 850Mbps. 

The internet provider is not scamming you. Chorus is delivering all 4000 Megabits to the box on your wall. The problem is that the moment the data leaves the wall, it slams into the physical limitations of your home hardware. 

Standard home networking equipment maxes out at exactly 1Gbps. Delivering 4Gbps Hyperfibre into a standard home router is like trying to drive a Formula 1 car through Auckland traffic at 5 PM. 

If you want Hyperfibre, you must understand the new Chorus hardware, and you must rebuild your internal home network to support it.

## The Hardware Swap: The Type 110 ONT

You cannot get Hyperfibre on your standard, sleek white Chorus ONT (the Type 300 or 400 models). Those units contain internal laser receivers that physically cannot process light pulses faster than 1Gbps.

When you upgrade via your ISP (Spark, Orcon, 2degrees), a Chorus technician will arrive at your house to perform a hardware swap. 

They will unclip your old ONT and install the **Hyperfibre Type 110 ONT**.
1.  **Size and Heat:** It is significantly larger than the old box and contains massive internal heat sinks because processing 8 Gigabits of data per second generates immense heat. 
2.  **The 10GE Port:** Look at the bottom of the new box. Alongside the standard four gigabit ports (GE1-GE4), there is a new, specialized port labeled **10GE**. This single port is capable of discharging 10,000 Megabits per second. 
3.  **The Golden Rule:** If you want Hyperfibre speeds, your router MUST be plugged into this specific 10GE port. If you plug it into GE1 out of habit, your connection will be permanently hard-throttled to 1Gbps.

## The Expensive Router Upgrade

You cannot use the free plastic router your ISP sent you three years ago. If you plug a standard gigabit router into the 10GE port, the router's internal CPU will instantly bottleneck the 4Gbps flow down to 1Gbps.

You must buy a **"Multi-Gig" or "10GbE" Router**.

When shopping at PB Tech in 2026, look specifically at the spec sheet for the physical ports on the back of the router:
*   **The WAN Port:** The router must have a dedicated 2.5Gbps or 10Gbps WAN port (to receive the internet from the Chorus box).
*   **The LAN Ports:** The router must also have high-speed 2.5Gbps or 10Gbps LAN ports to push that internet out to your computers. (A router with a 10G WAN port but only 1G LAN ports is utterly useless for a single PC, as the traffic gets bottlenecked on the way out).

These routers (like the Ubiquiti Dream Machine Pro SE, high-end ASUS ROG Rapture units, or custom pfSense builds) range from $600 to over $1,500. 

<AdSenseBlock slot='article-middle' />

## The Cable Bottleneck: Throw Away Your CAT5e

Even if you have the new Chorus box and a $1,000 router, your speeds will still fail if you use the wrong copper cable.

Look at the printing on the side of the ethernet cables connecting your router to your PC. 

*   **CAT5 / CAT5e:** These were the standard cables for the last 15 years. They are physically designed to carry exactly 1Gbps (1000Mbps) over long distances. If you try to force 4Gbps of Hyperfibre through a CAT5e cable, the electrical "cross-talk" noise inside the wire will cause localized packet loss, and the router will automatically throttle the speed back down to a safe 1Gbps.
*   **CAT6:** You must upgrade to CAT6. These cables have a plastic spline running down the middle that separates the copper pairs, reducing interference. They can comfortably carry 10Gbps over short distances (under 55 meters).
*   **CAT6A or CAT7:** For long runs through your ceiling cavity from the lounge to a home office, CAT6a is required. It features heavy metal shielding to block out electrical interference from the house lighting. 

## The PC Wall: 10GbE Network Cards

This is the final hurdle that catches almost every new Hyperfibre customer.

You have the 10Gbps Chorus box. You have the 10Gbps Router. You have the CAT6a shielded cables. You plug it into the back of your $3,000 custom gaming PC... and a speed test still says 1000Mbps.

Why? Because the metal Ethernet port built into the motherboard of your PC is only a 1-Gigabit port. 

Just like routers, 95% of consumer laptops, Macs, and PC motherboards are only manufactured with cheap 1Gbps network interface cards (NICs). They cannot physically ingest data faster than that.

To fix this:
1.  **For Desktop PCs:** You must buy a PCIe Network Expansion Card (like the ASUS 10G XG-C100C). Open your computer case, click the card into the motherboard, and plug your CAT6 cable into that new silver port instead of the main motherboard port.
2.  **For Laptops/MacBooks:** You must buy a heavy-duty Thunderbolt 3 to 10GbE Adapter (which often costs over $300 alone) and plug it into your USB-C/Thunderbolt port. 

## The Hard Truth About Wi-Fi and Hyperfibre

The most common misconception about Hyperfibre is that it will make loading Instagram on your iPhone faster in the bedroom. 

**Hyperfibre is fundamentally useless for Wi-Fi devices.**

In 2026, even with top-of-the-line Wi-Fi 6E or Wi-Fi 7 routers, the laws of physics regarding wireless radio wave transmission in a standard New Zealand home (with plasterboard walls and microwave interference) mean single devices rarely pull more than 1.2Gbps over the air. 

If you are a single person living alone, primarily using a MacBook on Wi-Fi, buying a 4000Mbps connection is a massive waste of money. The radio waves cannot deliver it to you. 

### Who is Hyperfibre Actually For?

1.  **The Ultimate Power User:** Someone with a home server, editing uncompressed 8K RED camera video footage directly off a cloud server in real-time, using a hardwired 10GbE desktop workstation.
2.  **The Mega-Household (The Splitter Method):** A flat of 7 heavy gamers. While no single Wi-Fi device can pull 4Gbps, a high-end Multi-Gig router can successfully *divide* that 4Gbps pipeline. It can give Flatmate 1 a dedicated 1Gbps for downloading a massive Steam game, Flatmate 2 a dedicated 1Gbps for streaming 4K to Twitch, and still leave 2Gbps empty for the rest of the house to use flawlessly at the exact same time without anyone experiencing bufferbloat.

Hyperfibre is not just an internet plan; it is an infrastructure project for your home. You must be prepared to rebuild your entire network to wield it.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
