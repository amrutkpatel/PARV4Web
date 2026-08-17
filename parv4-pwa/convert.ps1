Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('d:\HP\Github\PARV4Web\parv4-pwa\public\parv4-icon.jpg')
$img.Save('d:\HP\Github\PARV4Web\parv4-pwa\public\pwa-192x192.png', [System.Drawing.Imaging.ImageFormat]::Png)
$img.Save('d:\HP\Github\PARV4Web\parv4-pwa\public\pwa-512x512.png', [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
