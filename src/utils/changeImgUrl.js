export function changeImgUrl(url) {
    return require(`@/images/lol/${url}`)
}

export function changeVideoData(data) {
    data.data.data.forEach(item => {
        item.img = changeImgUrl(item.img)
        item.avatar = changeImgUrl(item.avatar)
    })
    return data
}

export function changeGameData(data) {
    data.data.forEach(item => {
        item.leftTeam.icon = changeImgUrl(item.leftTeam.icon)
        item.rightTeam.icon = changeImgUrl(item.rightTeam.icon)
    });
    return data
}

export function changeHotNews(data) {
    data.imgData.forEach(item => {
        item.url = changeImgUrl(item.url)
    })
    return data
}

export function changePlayerData(data) {
    data.avatar = changeImgUrl(data.avatar)
    data.rankData.forEach(item => {
        item.icon = changeImgUrl(item.icon)
    })
    return data
}

export function changeGameList(data) {
    data.forEach(item => {
        item.url = changeImgUrl(item.url)
    })
    return data
}

export function changeHonorData(data) {
    data.data.forEach(item => {
        item.url = changeImgUrl(item.url)
    })
    return data
}

export function changeDetailsUrl(data) {
    data.player.forEach(item => {
        item.url = changeImgUrl(item.url)
        item.equipment = changeImgUrl(item.equipment)
    })
    return data
}

