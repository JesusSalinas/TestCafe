export async function getRandomNumber(number) {
    const value = await Math.floor(Math.random() * number)
    return value + 1
}