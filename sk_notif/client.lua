RegisterCommand("announce", function(source, args, rawCommand)
    local src = source
    local text = table.concat(args, " ", 1)

    exports['sk_notif']:announce(text, 5000)
end, false) 

RegisterCommand("notification", function(source, args, rawCommand)
    local src = source
    local text = table.concat(args, " ", 1)

    exports['sk_notif']:notification(text, 5000)
end, false) 

exports("openHud", function()
	showhud = true
end)

exports("closeHud", function()
	showhud = false
end)




exports("announce", function(msg, duration)
    SendNUIMessage({
        type = "announce",
        msg = msg,
        duration = duration
    })
end)

exports("notification", function(msg, duration)
    SendNUIMessage({
        type = "notification",
        msg = msg,
        duration = duration
    })
end)

RegisterNetEvent("sk_notif:sendAnnounce")
AddEventHandler("sk_notif:sendAnnounce", function(msg, duration)
    SendNUIMessage({
        type = "announce",
        msg = msg,
        duration = duration
    })
end)

RegisterNetEvent("sk_notif:sendNotification")
AddEventHandler("sk_notif:sendNotification", function(msg, duration)
    SendNUIMessage({
        type = "notification",
        msg = msg,
        duration = duration
    })
end)

