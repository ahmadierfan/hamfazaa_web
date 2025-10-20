export const useEnglishToPersian = () => {
    const convertToFa = (input) => {
        if (typeof input !== 'string') input = String(input)

        const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
        const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        let output = ''
        for (let i = 0; i < input.length; i++) {
            const index = englishNumbers.indexOf(input[i])
            if (index > -1) {
                output += persianNumbers[index]
            } else {
                output += input[i]
            }
        }
        return output
    }

    return { convertToFa }
}
