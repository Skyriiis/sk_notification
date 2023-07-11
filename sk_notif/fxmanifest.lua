game 'gta5'
version '1.0'
fx_version 'adamant'
description '3in1'

client_scripts {
	'client.lua'
}

exports {
	"announce",
	"notification",
	'openHud',
	'closeHud',
}

ui_page('html/index.html')

files({
    'html/*.*',
})
