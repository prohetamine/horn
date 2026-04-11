import { COLORS, ICONS } from '../assets/defined'

const validatePoll = ({ title, source, description, isPay, stasCount, isUnique, isPoll, isOneNetwork, winCount, variants }) => {
    if (!(title && title.length > 0 && title.length < 101)) {
        return 'error_1'
    }

    if (source && !source.match(/^https?:\/\/[^\s]+$/i)) {
        return 'error_2'
    }

    if (!(description && description.length > 20 && description.length < 501)) {
        return 'error_3'
    }

    if (typeof isPay === "boolean" && isPay && !(parseInt(stasCount) === Math.abs(stasCount - 0) && parseInt(stasCount) > 1 && parseInt(stasCount) < 100000)) {
        return 'error_4'
    }

    if (typeof isUnique !== "boolean") {
        return 'error_5'
    }

    if (typeof isPoll !== "boolean") {
        return 'error_6'
    }

    if (typeof isOneNetwork !== "boolean") {
        return 'error_7'
    }

    if (winCount && !(parseInt(winCount) === Math.abs(winCount - 0) && parseInt(winCount) > 1 && parseInt(winCount) < 1000000000)) {
        return 'error_8'
    }

    if (!(variants.length > 0 && variants.length < 11)) {
        return 'error_9'
    }

    if (
        variants.find(({ title, colorIndex, iconIndex }) => !(
            title.length > 0 && 
            title.length < 100 && 
            colorIndex >= 0 && 
            colorIndex <= COLORS.length - 1 &&
            iconIndex >= 0 && 
            iconIndex <= ICONS.length - 1
        ))
    ) {
        return 'error_10'
    }

    return true
}

export default validatePoll