---
title: 'Shaw BlueCurve Admin Login: The Secret 10.0.0.1 Menu'
description: 'Want to change your Wi-Fi channel or enable Bridge Mode on your Shaw BlueCurve (Rogers Xfinity) Gateway? Learn the default admin login credentials and how to unlock the hidden 10.0.0.1 advanced settings menu.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'ca'
author: 'ErrorDocs Tech Team'
image: '/images/can-telecom/shaw-bluecurve-admin-login.png'
tags: ['Shaw', 'Rogers Xfinity', 'BlueCurve Gateway', 'Admin Login', 'Bridge Mode', 'Canada Tech']
instantAnswer: 'To access the advanced admin menu of your Shaw BlueCurve (Rogers Xfinity) Gateway, connect your phone or laptop to the home Wi-Fi. Open Chrome or Safari and type exactly **10.0.0.1** into the very top URL bar (do not Google it). Press Enter. On the login screen, enter **admin** as the username. Enter **password** as the password (all lowercase). You will immediately be forced to create a new, secure admin password to unlock Bridge Mode and advanced port forwarding.'
faqs:
  - question: 'Why does 10.0.0.1 redirect to a Google Search?'
    answer: 'This happens because you typed "10.0.0.1" into the Google Search box in the middle of your screen, rather than the actual URL address bar at the very top of the browser. You must type it exactly as an IP address for your local browser to connect directly to the Gateway hardware.'
  - question: 'Will Bridge Mode kill my wireless Ignite TV boxes?'
    answer: 'Officially, yes. Rogers and Shaw formally state that enabling Bridge Mode shuts off the internal Wi-Fi routing, severing the connection to wireless Ignite TV boxes. However, unofficially, modern Ignite TV boxes can be manually connected to your third-party ASUS or TP-Link router Wi-Fi network after Bridge Mode is enabled, but you will not receive official tech support if the TV feed buffers.'
  - question: 'I changed the admin password and forgot it. What now?'
    answer: 'You must perform a Master Factory Reset. Push a paperclip into the tiny reset pinhole on the back of the Gateway for exactly 30 seconds. This wipes the corrupted custom password from the RAM, restoring the default "admin" and "password" credentials so you can log back in.'
  - question: 'Why did the Shaw BlueCurve app change details?'
    answer: 'In April 2023, Rogers Communications acquired Shaw. By 2026, the entire Shaw BlueCurve ecosystem was rebranded to "Rogers Xfinity." The hardware remains identical, but the mobile app changed names and color schemes.'
---

# Shaw BlueCurve Admin Login: The Secret 10.0.0.1 Menu

<div class='instant-fix-box'>
  <p>To log into the Shaw BlueCurve / Rogers Xfinity admin panel: <strong>1.</strong> Ensure your device is connected to the home Wi-Fi. <strong>2.</strong> Open a web browser (Chrome, Edge, Safari). <strong>3.</strong> Type <strong>10.0.0.1</strong> directly into the top URL address bar and hit enter. <strong>4.</strong> The Gateway Login screen will appear. <strong>5.</strong> The default username is <strong>admin</strong>. <strong>6.</strong> The default password is <strong>password</strong>. You now have access to MAC filtering, Port Forwarding, and the Bridge Mode toggle.</p>
</div>

<AdSenseBlock slot='article-top' />

## Moving Beyond the Mobile App

For 95% of Canadian households, the **Rogers Xfinity App** (formerly the Shaw BlueCurve Home app) provides all the Wi-Fi control they will ever need. You can see who is online, pause your kids' iPads at bedtime, and run basic internet speed tests directly from your smartphone.

However, if you are a gamer, a tech enthusiast, or someone working from home with complex VPN requirements, the mobile app is incredibly restrictive. It acts like a digital babysitter, hiding the deeply technical settings to prevent average users from accidentally breaking their internet.

If you want to genuinely customize your network—setting a static IP address for your PlayStation 5 to fix NAT types, splitting your 2.4GHz and 5GHz bands, or completely turning off the internal router to use your own high-end ASUS mesh system—you must bypass the app entirely.

You must access the bare-metal Gateway Administration Tool. This tool lives off-grid at a specific local IP address: **10.0.0.1**.

## Step 1: Connecting to the 10.0.0.1 Gateway

This is an offline, "local" website. It does not exist on the public internet. It is hosted on a tiny web server built directly into the motherboard of your Gateway modem sitting in your living room. 

Because of this, you cannot access this menu using your cell phone's 5G/LTE data while sitting at a coffee shop. 

1.  **Connect Locally:** You must connect the device you are using (laptop, smartphone, or tablet) directly to the Shaw/Rogers Wi-Fi network. For the absolute best results, plug a laptop directly into the back of the Gateway using a yellow Ethernet cable.
2.  **Use the URL Bar:** Open a clean web browser (Google Chrome or Microsoft Edge work best). Look at the very top of the screen—the long rectangular box where you normally type `www.amazon.ca`. 
3.  **Type the IP:** Do not use the Google search bar in the middle of the screen. Type exactly **10.0.0.1** into the top URL bar. Do not add `www.` or `.ca`.
4.  **Press Enter:** Your browser will instantly bypass the world wide web and query the physical plastic box in your house. 
5.  **The Login Page:** A stark, grey-and-white login screen will appear, displaying the Rogers Xfinity or Shaw BlueCurve logo.

## Step 2: The Default Authentication Hack

Unlike your Wi-Fi password (which is usually a complex string of numbers printed on a sticker on the bottom of the modem), the Gateway Administration Tool uses a universal default login for all hardware across Canada.

1.  In the **Username** field, type: `admin` (all lowercase).
2.  In the **Password** field, type: `password` (all lowercase).
3.  Click the teal **Login** button.

### The Forced Password Change
The very first time you do this, the Gateway will immediately intercept you with a massive security warning. 

Because `admin/password` is the oldest, most recognized default credential combination on the planet, leaving it active is a massive cybersecurity threat. A hacker who gains access to your Wi-Fi could instantly log into 10.0.0.1, lock you out of your own modem, and re-route your web traffic.

The Gateway will force you to create a **Custom Admin Password**. 
*   This password must be entirely different from your Wi-Fi password.
*   Write this password down on a piece of masking tape and physically stick it to the bottom of the modem. 
*   If you forget this custom password in the future, the *only* way back into the 10.0.0.1 menu is to use a paperclip to Factory Reset the entire modem, wiping your entire custom Wi-Fi setup.

<AdSenseBlock slot='article-middle' />

## Step 3: Navigating the Advanced Menu

Once you successfully authenticate, you will be presented with a complex, dense dashboard detailing the structural health of your broadband connection. 

Here are the three most common tools Canadians are looking for when they unlock 10.0.0.1:

### 1. Activating Bridge Mode (Using Your Own Router)
If your house is larger than 2,500 square feet, the built-in Wi-Fi on the Rogers/Shaw Gateway will struggle to reach the basement and the backyard. Many users prefer to buy powerful third-party mesh systems (like TP-Link Deco or Eero) to handle the Wi-Fi. 

However, if you plug a new router into the Shaw Gateway without changing the settings, you create a **"Double NAT"**. Both routers fight to assign IP addresses, causing extreme lag in online gaming and Zoom calls.

*   Go to **Gateway > At a Glance**.
*   Look for the **Bridge Mode** toggle.
*   Click **Enable**.
*   *Warning:* The moment you click Enable, the Gateway will disable its internal Wi-Fi antennas. Your wireless Rogers Ignite TV boxes will drop offline. The Gateway essentially turns into a "dumb" pipe, passing the raw internet connection to Ethernet Port 1 on the back of the unit. You must plug your new third-party router into Port 1. 

### 2. Port Forwarding (Fixing Strict NAT for Xbox/PS5)
If you play Call of Duty or EA FC 26, you demand an "Open" NAT type for matchmaking. The rigid firewall on the Shaw Gateway often restricts this, labeling your console with a "Strict" NAT.

*   Go to **Advanced > Port Forwarding**.
*   Find the local IP address of your gaming console on the network map.
*   Assign the specific UDP/TCP ports required by Sony or Microsoft to that local IP address. 
*   This punches a permanent, secure hole through the firewall specifically for game traffic.

*Note: In 2026, Rogers has begun migrating the Port Forwarding UI away from 10.0.0.1 and forcing users to manage it exclusively through the cloud-based Rogers Xfinity mobile app under "Advanced Settings." If the Port Forwarding tab in 10.0.0.1 is greyed out with a message stating "Managed via App", you must use your smartphone to configure the ports.*

### 3. Splitting the 2.4GHz and 5GHz Bands (Smart Home Fix)
By default, the Gateway uses "Band Steering." It broadcasts one single Wi-Fi name, and the modem mathematically forces your phone onto either the 2.4GHz or 5GHz band depending on signal strength.

Smart home devices (like cheap Amazon Alexa lightbulbs or generic Wi-Fi garage door openers) utterly panic when they encounter Band Steering. They only speak 2.4GHz, and they frequently crash during setup because they get confused by the 5GHz signal sharing the same name.

*   Go to **Connection > Wi-Fi**.
*   Click **Edit** next to your Wi-Fi network.
*   Disable **Band Steering**.
*   Rename your 5GHz network so it is distinctly different from the 2.4GHz network (e.g., `Smith_House` and `Smith_House_5G`).
*   Now, connect your smartphone strictly to the 2.4GHz `Smith_House` network, and your smart lightbulbs will easily pair on the first try. 

---

*This guide is part of the ErrorDocs Canadian Telecom Rescue Series. Written and verified by Canadian broadband specialists for 2026 hardware standards.*
