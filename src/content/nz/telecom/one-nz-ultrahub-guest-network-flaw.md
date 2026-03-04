---
title: 'One NZ UltraHub: Stop Hackers Using This Secret Guest Network Flaw'
description: 'The One NZ UltraHub has a guest network enabled by default with a major security weakness. Learn how to find it, disable it, or properly secure it before someone on your street exploits it to access your home network.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/one-nz-ultrahub-security.png'
tags: ['One NZ', 'UltraHub', 'Guest Network', 'Security', 'Wi-Fi Hack', 'NZ Tech']
instantAnswer: 'Log in to your UltraHub at 192.168.1.254 (admin/admin or check base sticker). Go to Wireless, then Guest Network. Either disable it entirely or set a strong unique password. The default guest network has no client isolation, meaning anyone on it can see your shared printers, NAS drives, and security cameras.'
faqs:
  - question: 'Can someone on the guest network see my files?'
    answer: 'On the default UltraHub configuration, yes. The guest network does not have client isolation enabled by default. This means a guest can potentially discover and access shared folders, network printers, and smart home devices on your main network.'
  - question: 'Is the guest network password the same as my main Wi-Fi password?'
    answer: 'No. The guest network uses a different password which is often simpler or sometimes has no password at all on factory default settings. Check your UltraHub admin page under Wireless to see the guest network credentials.'
  - question: 'Should I just disable the guest network?'
    answer: 'If you never have visitors who need Wi-Fi access, yes, disable it. If you do want to offer guest Wi-Fi, keep it enabled but make sure client isolation is turned on and use WPA3 security with a strong password.'
  - question: 'My UltraHub does not have a Guest Network option. Is that normal?'
    answer: 'Older UltraHub firmware versions may not show the guest network option. Check for firmware updates under System and then Firmware in the admin page. The guest network feature was added in firmware updates from late 2024 onwards.'
---

# One NZ UltraHub: Stop Hackers Using This Secret Guest Network Flaw

<div class='instant-fix-box'>
  <p>Your One NZ UltraHub may have a guest Wi-Fi network enabled that you did not know about. By default, this guest network lacks proper client isolation, which means anyone connected to it can potentially browse your shared files, access your printers, and see your security camera feeds. Log in to 192.168.1.254, go to Wireless Settings, and either disable the guest network or enable client isolation immediately.</p>
</div>

<AdSenseBlock slot='article-top' />

## The Hidden Security Problem with Your UltraHub

If you are a One NZ (formerly Vodafone NZ) broadband customer, there is a good chance you have the **UltraHub** or **UltraHub Plus** modem sitting in your home right now. It is the white rectangular unit with rounded edges that One NZ ships with all their fibre plans.

What most NZ users do not realize is that this modem may be broadcasting a second Wi-Fi network that you never set up. This is the **guest network**, and on many UltraHub units shipped before mid-2025, it has a serious configuration oversight that could let a stranger on your street access devices on your home network.

Let me be completely clear about the risk here. This is not a theoretical hacking scenario. This is a misconfiguration that a curious teenager with a laptop could exploit from your driveway. Here is how it works and exactly how to fix it.

## Understanding the Guest Network Vulnerability

A properly configured guest network creates what network engineers call a **network segment**. Think of it like a separate room in your house. Guests can use the internet through your connection, but they cannot open doors to your private rooms (your computers, printers, cameras, and shared drives).

The One NZ UltraHub has a guest network feature, but on many firmware versions shipped before 2025, the **client isolation** setting is either missing or disabled by default. Client isolation is the digital lock that keeps the guest room separate from your private rooms.

Without client isolation, here is what a person connected to your guest network can do:

*   **Browse your shared folders.** If you have a shared drive or NAS box (like a Synology or QNAP) on your network, the guest can discover it and potentially access any files you have not password-protected.
*   **Access your network printers.** They can send print jobs to your printer, which at worst could be used to print offensive or threatening material in your home.
*   **Discover your smart home devices.** Security cameras (Eufy, Ring, Reolink), smart speakers (Alexa, Google Home), and smart plugs are all visible on the network. While attacking these requires more skill, simply knowing what devices you own is a privacy violation.
*   **Perform man-in-the-middle attacks.** A technically skilled attacker on the guest network without isolation could potentially intercept unencrypted traffic from other devices on the same network segment.

The guest network password, if one is even set, is often a simple default like 'guest1234' or sometimes the network is completely open with no password at all.

## How to Check If Your Guest Network Is Active

### Step 1: Scan for Networks

On your phone, go to Wi-Fi settings and look at the list of available networks. If you see a network with a name similar to your main Wi-Fi but with '-Guest' or '-Visitor' appended, your guest network is active.

Common default guest network names on the UltraHub include:
*   UltraHub-Guest-XXXX
*   OneNZ-Guest-XXXX
*   Vodafone-Guest-XXXX (on older units before the rebrand)

### Step 2: Log in to the Admin Page

Open a browser and go to **192.168.1.254**. This is the default admin address for the One NZ UltraHub.

Default login credentials:
*   **Username:** admin
*   **Password:** admin (or check the sticker on the bottom of the modem)

If admin/admin does not work, try the password printed on the base sticker. One NZ changed to unique passwords on some newer shipments.

### Step 3: Navigate to Wireless Settings

Once logged in, look for **Wireless** or **Wi-Fi Settings** in the navigation menu. Under the wireless section, there should be a sub-menu or tab for **Guest Network** or **Guest Access**.

If you see this section and the guest network is enabled, you have confirmed the issue. Now let me show you how to fix it.

## Method 1: Disable the Guest Network Entirely

This is the simplest and most secure approach if you do not need to provide Wi-Fi access to visitors.

1.  In the **Guest Network** settings, find the toggle or checkbox to **Enable/Disable** the guest network
2.  Turn it **OFF** or uncheck the box
3.  Click **Apply** or **Save**
4.  The guest network SSID will disappear from the available networks list within 30 seconds

That is it. The second network is gone and nobody can connect to it.

## Method 2: Properly Secure the Guest Network

If you do want to keep a guest network for visitors (useful if you rent out rooms on Airbnb or regularly host family), you need to fix the security settings.

### Enable Client Isolation

This is the most critical setting. Look for **Client Isolation**, **AP Isolation**, or **Network Separation** in the guest network settings.

Turn it **ON**. This ensures that anyone on the guest network can access the internet but cannot see or communicate with any devices on your main network. The guest room door is now locked.

### Set a Strong Password

Change the guest network password to something that is:
*   At least 12 characters long
*   Contains a mix of letters and numbers
*   Is different from your main Wi-Fi password
*   Is something you can easily share verbally with guests

Example: 'Welcome2myplace' is far better than 'guest1234.'

### Use WPA3 or WPA2 Security

Make sure the guest network security is set to **WPA2** at minimum. If **WPA3** is available, use WPA3 or WPA2/WPA3 mixed mode. Never leave it as 'Open' or 'None.'

### Limit the Guest Network Speed (Optional)

Some UltraHub firmware versions allow you to set a **bandwidth limit** on the guest network. If available, set it to 30 percent of your total plan speed. This prevents a guest from consuming all your bandwidth with large downloads, which would slow down your own devices.

<AdSenseBlock slot='article-middle' />

## Advanced Security: What Else to Lock Down on Your UltraHub

While you are in the admin panel, there are several other security settings that every NZ household should configure:

### Change the Admin Password

If your UltraHub login is still admin/admin, change it immediately. Go to **System** or **Administration** and set a unique admin password. If someone gains access to your admin page, they can change your DNS settings to redirect your traffic through their servers, effectively spying on everything you do online.

### Disable WPS

**Wi-Fi Protected Setup (WPS)** lets you connect devices by pressing a physical button on the router. It has a well-known brute-force vulnerability. Go to **WPS Settings** and turn it **OFF**. In 2026, no security-conscious network engineer leaves WPS enabled.

### Disable Remote Management

Check for a setting called **Remote Management** or **Remote Access** under the administration section. Make sure it is **OFF**. When enabled, this allows someone to access your router admin page from outside your home network over the internet. There is almost never a legitimate reason for a home user to have this enabled.

### Enable the Firewall

Verify that the UltraHub's built-in **firewall** is enabled. It should be on by default, but check under **Security** or **Firewall** settings. The firewall blocks unsolicited incoming connections from the internet, which is your primary defense against automated hacking bots.

### Change the Default DNS Server

By default, the UltraHub uses One NZ's DNS servers. While these work fine, you can improve both speed and security by switching to:

*   **Primary: 1.1.1.1** (Cloudflare - fast and privacy-focused, blocks known malware domains on the 1.1.1.2 variant)
*   **Secondary: 9.9.9.8** (Quad9 - automatically blocks known malicious domains)

This gives you an extra layer of protection against phishing websites and malware distribution networks.

## Understanding the Real-World Risk in New Zealand

You might be thinking 'nobody in my quiet NZ suburb is going to hack my Wi-Fi.' And you are probably right that a targeted attack is unlikely. But the risk is not targeted attacks. It is opportunistic scanning.

In 2026, automated tools like **Airgeddon** and **Wifite** can scan an entire street of Wi-Fi networks in seconds. These tools look specifically for networks with weak or no passwords, guest networks with no isolation, and routers with WPS enabled. They are freely available online and can be run by anyone with a laptop and a $30 Wi-Fi adapter from **PB Tech** or **AliExpress**.

In densely packed NZ suburbs (think Grey Lynn, Mount Eden, Upper Hutt, Riccarton, or any new subdivision), your Wi-Fi signal reaches well beyond your property boundary. A guest network broadcasting from your UltraHub can be picked up from the street, the neighbour's driveway, or the local park.

The most common real-world exploit is not data theft. It is **free internet**. Someone discovers your open or weakly-protected guest network and starts using it for downloads. This eats your bandwidth, slows your connection, and if they use it for illegal activity, the traffic is traced back to your IP address.

## What to Tell One NZ Support

If you believe your guest network has been exploited, or if you want One NZ to verify your UltraHub settings remotely, call them on **0800 800 021** and say:

> 'I have discovered that my UltraHub guest network was enabled without client isolation. I have now secured it, but I am concerned that unauthorized devices may have connected. Can you check my modem logs for unknown MAC addresses? I would also like to confirm that my firmware is up to date and that no remote management access has been configured.'

## Hardware Upgrades for Better Security

The UltraHub is a mid-range modem with acceptable security features once properly configured. However, if you want enterprise-level security for your NZ home, consider these upgrades:

*   **ASUS RT-AX86U Pro** ($350 from **PB Tech**): Has AiProtection Pro powered by Trend Micro, which blocks malicious websites, scans for vulnerabilities, and alerts you to suspicious network activity. The guest network implementation on ASUS routers has proper isolation enabled by default.
*   **UniFi Dream Router** ($450 from **Ubiquiti NZ resellers**): This is what IT professionals use in their own homes. It provides full network segmentation with VLANs, meaning you can create completely separate networks for guests, IoT devices, and personal devices with zero chance of cross-communication.
*   **TP-Link Deco XE75 Pro** ($400 from **Noel Leeming**): A mesh system with built-in HomeShield security that automatically isolates guest traffic and sends you phone alerts when new devices connect.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
