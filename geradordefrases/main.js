function randomSentence() {
    const randomNoum = nouns[Math.floor(Math.random() * nouns.length)]
    const randomVerb = verbsInThePresent[Math.floor(Math.random() * verbsInThePresent.length)]

    const kanji = `${randomNoum.kanji}${useful['sujeito1']}${randomVerb.kanji}${useful['pontoFinal']}`
    const hiragana = `${randomNoum.hiragana}${useful['sujeito1']}${randomVerb.hiragana}${useful['pontoFinal']}`
    const jp = `${randomNoum.jp}${useful['sujeito1']}${randomVerb.jp}${useful['pontoFinal']}`
    const vectorJP = []
    vectorJP.push(randomNoum.hiragana+useful['sujeito1'])
    vectorJP.push(randomVerb.hiragana+useful['pontoFinal'])
    const vectorPt = [`${randomNoum.pt} ${randomVerb.pt}.`]
    return { kanji, hiragana, jp, vectorJP, vectorPt }
}

// const sentence = randomSentence()
// console.log(`jp: ${sentence.jp} \njpk: ${sentence.kanji} \njpH: ${sentence.hiragana} \npt: ${sentence.pt}`)