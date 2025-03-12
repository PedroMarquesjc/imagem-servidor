#!/bin/bash

apt-get update
apt-get upgrade -y

apt-get install apache2 unzip -y

cd /tmp
wget https://github.com/PedroMarquesjc/imagem-servidor 	
unzip main.zip
cd linux-site-dio-main
cp -R * /var/www/html/



