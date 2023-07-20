import random
def generateSenctence():
    articles=["the ","a ","an "]
    nouns=["cat ","dog ","car ","apple ","book "]
    verbs=["sang ","ran ","jumped ","saw ","ate ","walked "]
    adverbs=["loudly","quietly","well","badly"]
    senctence=random.choice(articles)+random.choice(nouns)+random.choice(verbs)+random.choice(adverbs)
    print(senctence.title())
generateSenctence()