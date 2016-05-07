# Identity      : npm-install.sh - 1.0
# Auteur        : Joker
#
# Description   : Automatisation de l'installation npm
# 
# Usage         : ./npm-install.sh
# Remarque(s)   : Ce script nécessite NodeJS
#
# Versions      :
#  V   | Date     | Auteur           | Description des modifications
# -----|----------|------------------|------------------------------------------        
# 1.0  |02-05-2016| Joker            | Initial
#
#################################################################################


	# NPM init
	npm init

	# NPM install
	# Express
	npm install express --save
	npm install body-parser --save
	npm install method-override --save
	npm install morgan --save
	# ORM
	npm install mongoose --save

	NORMAL="\\033[0;39m"
	CYAN="\\033[1;36m"
	VERT="\\033[1;32m"
	echo '---------------------------------------------'
	echo -e "$VERT" "NPM INSTALL DONE"
	echo ''
	echo -e " RUN YOUR APP : " "$CYAN" " node server.js" "$NORMAL"
	echo '---------------------------------------------'
    


exit 0

## END ##
