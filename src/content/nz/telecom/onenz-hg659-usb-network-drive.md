---
title: 'One NZ HG659 Router: The Hidden USB Port Network Drive Hack'
description: 'Did you know your old One NZ (Vodafone) Huawei HG659 router has a USB port that can turn any flash drive into a free home network server? Learn how to configure the Samba share settings to stream movies to your Smart TV.'
category: 'Telecom'
lastUpdated: 2026-03-05
country: 'nz'
author: 'ErrorDocs Tech Team'
image: '/images/onenz-hg659-usb-hack.png'
tags: ['One NZ', 'Vodafone', 'HG659', 'USB Drive', 'Samba Share', 'NAS', 'NZ Tech']
instantAnswer: 'Plug a USB hard drive into the side of the Huawei HG659 router. Log into 192.168.1.254 (admin/admin). Go to Share > Storage Sharing. Ensure "Samba Server" is enabled. Create a username and password. Now, go to any Windows PC on your Wi-Fi, open File Explorer, and type \\192.168.1.254 into the top address bar. You now have a free network hard drive for the whole house.'
faqs:
  - question: 'What format does the USB drive need to be?'
    answer: 'The Huawei HG659 is an older Linux-based router. For the most stable connection, format your USB flash drive or external hard drive to FAT32 or NTFS using a Windows computer before plugging it into the router.'
  - question: 'Can I stream movies to my Smart TV from this?'
    answer: 'Yes. Once the Samba (SMB) and DLNA media servers are enabled in the HG659 router settings, most modern Smart TVs (Samsung, LG, Sony) connected to the same Wi-Fi will automatically detect the USB drive as a "Network Media Source" and let you play movies directly from it.'
  - question: 'Is it safe to leave a hard drive plugged in 24/7?'
    answer: 'Yes, it is perfectly safe. However, the USB 2.0 port on the side of the HG659 does not supply a massive amount of power. It works best with modern USB sticks or SSDs. Old, spinning mechanical hard drives may click or fail to spin up unless they have their own separate wall power supply.'
  - question: 'Will this slow down my One NZ internet?'
    answer: 'No. Transferring files between your laptop and the router USB drive happens entirely on your local home Wi-Fi network. It does not use your One NZ internet data plan, and it does not use up your internet bandwidth.'
---

# One NZ HG659 Router: The Hidden USB Port Network Drive Hack

<div class='instant-fix-box'>
  <p>To turn your One NZ HG659 router into a free Network Attached Storage (NAS) drive: Plug a FAT32/NTFS formatted USB drive into the router's side port. Log into <strong>192.168.1.254</strong>. Navigate to <strong>Share</strong> > <strong>Storage Sharing</strong>. Check <strong>Enable Samba Server</strong>. Then on your Windows PC, open File Explorer, type <strong>\\192.168.1.254</strong> in the address bar, and press Enter to instantly access your files wirelessly.</p>
</div>

<AdSenseBlock slot='article-top' />

## The Wasted Port on the Side of Your Router

If you are a long-term Vodafone (now One NZ) customer, you likely have a black, upright tower modem sitting in your living room. This is the **Huawei HG659**. 

While it is an older piece of hardware in 2026, it hides a completely undocumented, highly useful feature. Look at the right-hand side of the router. About halfway up, there is a standard USB port.

You might assume this is for a technician to plug a diagnostic tool into, or perhaps to charge a phone. 

In reality, it is a gateway to a free **NAS (Network Attached Storage)** system. 

By plugging a standard USB flash drive or a portable hard drive into this port, and clicking three buttons in the hidden software menu, you can create a centralized digital storage locker for your entire house. 

## Why Build a "Router NAS"?

Before we walk through the setup, it helps to understand why you would actually want to do this.

Normally, if you download a movie on your laptop and want to watch it on your Samsung Smart TV, you have to find a USB stick, copy the movie, physically unplug the USB stick, walk to the TV, plug it into the back of the TV, and navigate the TV menus. Later, if you want to give that movie to your flatmate, you have to hand them the physical USB stick.

A Router NAS eliminates all of this.

You take a massive 1TB external hard drive and permanently plug it into the side of the One NZ HG659 router. Because the router is the central "brain" connecting all your devices, that 1TB drive is instantly visible over Wi-Fi to every device in the house.

*   You can save family photos from your Mac directly to the router.
*   Your flatmate can open those photos on their Windows PC in the bedroom.
*   Your Smart TV in the lounge will automatically detect the hard drive and stream movies directly off it.

You have built a professional-grade home server for zero dollars.

## Step 1: Prepping the Hard Drive

The Huawei HG659 is running a stripped-down, embedded version of Linux. It is incredibly picky about how hard drives are formatted. 

If you take a USB drive formatted specifically for Apple Mac (HFS+), the router will not be able to read it.

1.  Plug your chosen USB flash drive or external hard drive into your Windows computer.
2.  Open **File Explorer** and click on **This PC**.
3.  Right-click on the USB drive and select **Format**.
    *(Warning: Formatting erases everything on the drive. Back up your files first).*
4.  Change the File System dropdown to **NTFS** (best for large hard drives and movie files over 4GB) or **FAT32** (best for smaller flash drives).
5.  Click **Start**.
6.  Once formatted, unplug the drive from your PC.
7.  Walk over to your One NZ HG659 router and push the USB drive firmly into the left or right side USB port. 

## Step 2: Enabling the Samba Server

Now we have to tell the router software to share the drive over the Wi-Fi network. The technology that does this is called **Samba** (also known as SMB).

1.  Open Chrome or Safari on your computer (which is connected to the One NZ Wi-Fi).
2.  Type **192.168.1.254** into the address bar and press Enter.
3.  Log in using the default Vodafone credentials: `admin` for Username and `admin` for password (or the unique password on the back sticker).
4.  On the top navigation bar, click on **Share** (or **Advanced**, then **Share** depending on your specific firmware version).
5.  On the left-hand menu, select **Storage Sharing**.
6.  In the main window, you should see your USB device listed under "USB Devices". If the list is empty, the router cannot read the drive (go back to Step 1 and try formatting it to FAT32).
7.  Check the box labeled **Enable Samba Server**.

### User Permissions (Optional but Recommended)
By default, the router might set the drive to "Anonymous Access," meaning anyone who walks into your house and connects to your Wi-Fi can see and delete everything on your drive. 

To secure it:
1.  Under the "User Settings" section on the same page, create a new username (e.g., `family`) and a password.
2.  Click **Save** or **Apply**.

<AdSenseBlock slot='article-middle' />

## Step 3: Accessing Your New Network Drive

The server is running. Now you need to connect your devices to it.

### Connecting from a Windows PC
1. Open **File Explorer** (the yellow folder icon on your taskbar).
2. Look at the long address bar at the very top of the window (where it normally says "This PC").
3. Delete whatever text is there, and type exactly this: **`\\192.168.1.254`**
4. Press Enter.
5. Windows will pop up a security box asking for credentials. Type the username and password you created in Step 2. (If you didn't create one, it may not ask, or you can try `admin`/`admin`).
6. A folder will appear representing your USB drive. You can now drag and drop files exactly as if it were plugged directly into your computer. 

*Pro Tip: Right-click this folder and select "Map network drive" so Windows assigns it a permanent letter (like Z:). This means it will always show up in "This PC" alongside your main C: drive.*

### Connecting from an Apple Mac
1. Open the **Finder** app.
2. In the top Apple menu bar, click **Go**, then scroll down to **Connect to Server**.
3. In the Server Address box, type exactly this: **`smb://192.168.1.254`**
4. Click Connect.
5. Enter your username and password when prompted. The drive will mount on your desktop like a standard USB.

## Step 4: The Ultimate Hack - Streaming to Your Smart TV

If your goal is to watch movies, the standard Samba setup described above works for computers, but some older Smart TVs might struggle to understand standard Windows file structures. 

To make it completely dummy-proof for a TV, you must turn on the router's internal DLNA Media Server.

**What is DLNA?** It is a protocol specifically designed for streaming media. When DLNA is turned on, the router actively scans your USB drive, finds all the video (.mp4, .mkv) and audio (.mp3) files, and broadcasts a continuous playlist to everything on your Wi-Fi network.

1.  Log back into **192.168.1.254**.
2.  Go to **Share** > **Media Sharing** (or DLNA Server).
3.  Check the box to **Enable Media Server**.
4.  You will be asked to name the server. Name it something obvious like "Vodafone Movie Drive".
5.  Click the button to select which folder on the USB drive contains your media.
6.  Click **Apply**.

Now, go to your Samsung, LG, Sony, or Panasonic Smart TV. Press the "Input" or "Source" button on your TV remote (the same button you use to switch to HDMI 1 for your PlayStation). 

Alongside HDMI 1 and HDMI 2, you will suddenly see a new input labeled **"Vodafone Movie Drive"**. Select it, and you can instantly scroll through every movie on your router's hard drive using your TV remote.

## Troubleshooting: Why Does It Buffer?

If your files transfer slowly, or your movies pause and buffer every three minutes, you are running into the physical limitations of the 2016-era Huawei hardware.

1.  **The USB 2.0 Bottleneck:** The port on the side of the HG659 is USB 2.0. The absolute maximum theoretical speed of USB 2.0 is 60 Megabytes per second, but the cheap processor inside the HG659 usually limits this to about 15 Megabytes per second over Wi-Fi. It is perfectly fine for copying photos, Word documents, or streaming 1080p movies. It will struggle, and likely freeze, if you try to stream massive, uncompressed 4K Blu-Ray files.
2.  **Power Draw Failures:** The router provides very low electrical current to the USB port. If you plug in an old mechanical hard drive with spinning disks, the port might not have enough power to spin the disk properly. The drive will randomly disconnect. You must use either a silent USB Flash Stick/SSD, or an external hard drive that plugs into its own wall power socket.
3.  **The Processor Overload:** The HG659's main job is routing your One NZ internet. If someone in the house is downloading a massive PlayStation update at 900Mbps, the router's tiny CPU will be maxed out. If you try to transfer a file to the USB drive at the exact same time, the transfer will drop to a crawl simply because the router's "brain" is too busy.

Despite these limitations, this hack remains one of the best ways to get massive utility out of aging telecom hardware that would otherwise just gather dust in the corner.

---

*This guide is part of the ErrorDocs NZ Telecom Rescue Series. Written and verified by NZ broadband specialists for 2026 hardware standards.*
