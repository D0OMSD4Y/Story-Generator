// Story Forge - Interactive Tarot-Based Story Generator
// Complete implementation with all 78 cards and 9 spreads

// ==================== DATA STRUCTURES ====================

const TAROT_CARDS = [
  {
    id: 1,
    sideA: { type: "Destiny", title: "Misfortune", description: "Fortune frowns when it is most needed, dealing a crushing blow." },
    sideB: { type: "Destiny", title: "Fortune", description: "Against all odds, the tides of fortune turn for the better." }
  },
  {
    id: 2,
    sideA: { type: "Wealth", title: "The Know-It-All", description: "Someone offers advice and guidance, but their expertise may be questionable or their motives disingenuous." },
    sideB: { type: "Wealth", title: "The Consultant", description: "Whether they are paid or just willing to share the benefits of their experience, this person can be looked to for solid guidance and advice." }
  },
  {
    id: 3,
    sideA: { type: "Destiny", title: "Death", description: "Death by accident or natural causes. This might be an immediate death or current events may be shaped by a death in the past." },
    sideB: { type: "Destiny", title: "Murder", description: "Death by murder, suicide, or other unnatural causes. Could possibly be a death that leaves important issues unresolved." }
  },
  {
    id: 4,
    sideA: { type: "Will", title: "Law", description: "This can be the idea of law, the institution of the legal system, or the intervention of a law enforcement agency." },
    sideB: { type: "Will", title: "Crime", description: "The negation or ignorance of law. Can represent a career criminal or that a crime has taken place." }
  },
  {
    id: 5,
    sideA: { type: "Emotion", title: "Pride", description: "The excessive belief in one's own worth and abilities has been called the sin from which all others arise." },
    sideB: { type: "Emotion", title: "Humility", description: "Remaining humble even in the face of accolades is the mark of a strong character - or perhaps low self-esteem." }
  },
  {
    id: 6,
    sideA: { type: "Emotion", title: "Chastity", description: "A refusal of sex or love is called for. Someone must resist temptation that could lead to undesirable consequences." },
    sideB: { type: "Emotion", title: "Lust", description: "Unbridled carnal desire blinds one to reason and takes control of his or her actions." }
  },
  {
    id: 7,
    sideA: { type: "Will", title: "Belief", description: "Whether religious faith or an untested scientific theory, one believes a fact to be true even though he or she has no tangible evidence." },
    sideB: { type: "Will", title: "Disbelief", description: "No matter how the evidence is presented, the argument being made is counter to what one already believes, and he or she is unable to accept it as truth." }
  },
  {
    id: 8,
    sideA: { type: "Identity", title: "The Loser", description: "With the complete lack of charisma or leadership skills, nobody would follow or place much faith in this person." },
    sideB: { type: "Identity", title: "The Leader", description: "A natural leader who uses charisma and sheer presence to influence the actions of others." }
  },
  {
    id: 9,
    sideA: { type: "Identity", title: "The Secret Admirer", description: "This person keeps to the shadows, either too shy to publicly admit his or her adoration or because the attention may be unwelcome or inappropriate." },
    sideB: { type: "Identity", title: "The Fan", description: "This person deeply admires someone and seeks every chance to sing his or her praises." }
  },
  {
    id: 10,
    sideA: { type: "Identity", title: "Virtue", description: "Someone acts in accordance with that which is known to be right and true." },
    sideB: { type: "Identity", title: "Vice", description: "Even knowing it to be wrong, someone gives in to his or her baser nature, selfishly pursuing only the most prurient interests." }
  },
  {
    id: 11,
    sideA: { type: "Will", title: "Delusion", description: "A lie to one's self, whether deliberate or involuntary. Someone may be attempting to fool his or her self with justifications and rationalizations, or by clinging to facts that are simply not true." },
    sideB: { type: "Will", title: "Deception", description: "Not just the concealment of truth, this card represents a deliberate, calculated attempt to convince someone of something other than the truth." }
  },
  {
    id: 12,
    sideA: { type: "Will", title: "The Officer", description: "A career soldier with many years of training, combat experience, and a life in the military." },
    sideB: { type: "Will", title: "The Soldier", description: "Someone is suddenly thrust into taking up arms, either willingly to protect the homeland or is unwillingly drafted into military service." }
  },
  {
    id: 13,
    sideA: { type: "Emotion", title: "Wrath", description: "Vengeance can not be denied. The wronged can not rest or even think of anything else until the offenders have paid dearly." },
    sideB: { type: "Emotion", title: "Forgiveness", description: "As hard as it may be, it is time to let go of grudges and forgive those who may have caused harm." }
  },
  {
    id: 14,
    sideA: { type: "Emotion", title: "The Samaritan", description: "The kindest of souls is found in this person, one who has dedicated his or her life to helping others." },
    sideB: { type: "Emotion", title: "The Grifter", description: "When a stranger offers help, their motives may not be purely altruistic or sincere. Their assistance may come at a price." }
  },
  {
    id: 15,
    sideA: { type: "Destiny", title: "The Dilemma", description: "The choosing of a path is uncomfortable. Either none of the choices are attractive or one may be facing a situation where the wrong choice can be catastrophic." },
    sideB: { type: "Destiny", title: "The Crossroads", description: "The path ahead can be chosen with some degree of confidence. At least one of the choices leads to a desired goal. The path which should be taken may be indicated or even obvious." }
  },
  {
    id: 16,
    sideA: { type: "Wealth", title: "The Criminal", description: "There are those who make their living simply taking what they want from others, either by force or by stealth." },
    sideB: { type: "Wealth", title: "The Outlaw", description: "Not all crimes hurt the innocent. In the eyes of the law, Robin Hood was a criminal, even though his cause was considered by many to be just." }
  },
  {
    id: 17,
    sideA: { type: "Emotion", title: "Despair", description: "Once hope is crushed and all looks lost, the will to continue is almost impossible to rekindle." },
    sideB: { type: "Emotion", title: "Hope", description: "Hope can keep the darkness at bay, even when the situation is grim. As long as there is the remote possibility of achieving the goal, the strength and courage to go on will be found." }
  },
  {
    id: 18,
    sideA: { type: "Destiny", title: "Alliance", description: "There is strength in numbers, and much comfort to be found in taking on a challenge in concert with one's most trusted comrades." },
    sideB: { type: "Destiny", title: "Solitude", description: "The goal must be pursued alone. Either assistance is not available or it must be refused." }
  },
  {
    id: 19,
    sideA: { type: "Wealth", title: "The Investor", description: "This person expects a substantial return for their contribution or support." },
    sideB: { type: "Wealth", title: "The Patron", description: "The assistance that this person provides is material in nature and intended to help someone realize a shared vision." }
  },
  {
    id: 20,
    sideA: { type: "Identity", title: "Denial", description: "Self-rejection; one refuses to recognize the person he or she sees reflected in the mirror." },
    sideB: { type: "Identity", title: "The Mirror", description: "Self-examination is the key; a deep understanding of core values and a clear grasp of one's strengths and weaknesses are crucial." }
  },
  {
    id: 21,
    sideA: { type: "Will", title: "Knowledge", description: "Information, the wisdom to apply it well, and the power that comes with it." },
    sideB: { type: "Will", title: "Ignorance", description: "One is missing important or correct information, which may lead to vulnerability." }
  },
  {
    id: 22,
    sideA: { type: "Destiny", title: "Balance", description: "The elements in the world are in equilibrium. All forces are evenly matched or cancelled out by opposing forces." },
    sideB: { type: "Destiny", title: "Imbalance", description: "Forces or influences are not in equilibrium. One element overpowers another, creating an unstable, chaotic, or even dangerous situation." }
  },
  {
    id: 23,
    sideA: { type: "Destiny", title: "The Trickster", description: "The Trickster is winning, successfully obfuscating the line between the real and the unreal." },
    sideB: { type: "Destiny", title: "Clarity", description: "Despite any efforts to cloud the issue, it is obvious what is real and what is not." }
  },
  {
    id: 24,
    sideA: { type: "Wealth", title: "Sloth", description: "Effort comes hard for some people, even when being lazy may hurt their chances of getting what they want." },
    sideB: { type: "Wealth", title: "Industry", description: "The task at hand will be difficult. Only an extremely hard-working person will earn the satisfaction and reward for a job well done." }
  },
  {
    id: 25,
    sideA: { type: "Destiny", title: "The Captive", description: "The way forward is blocked. A captor, physical trap, or obstruction prevents any progress or escape." },
    sideB: { type: "Destiny", title: "The Stranded", description: "Either the time is not yet right to proceed or the skills, tools, or convictions needed to go forward must first be obtained." }
  },
  {
    id: 26,
    sideA: { type: "Destiny", title: "The Jilted", description: "Love gone awry; unrequited or forbidden love, an illicit affair or the break up of a serious relationship." },
    sideB: { type: "Destiny", title: "The Lovers", description: "True love, all consuming, at its most beautiful, becomes the primary focus, sometimes to the exclusion of all else." }
  },
  {
    id: 27,
    sideA: { type: "Wealth", title: "Restraint", description: "Something that one desires is offered, but it may be asking too much or seem ostentatious to accept it. Finding the strength to hold back is called for." },
    sideB: { type: "Wealth", title: "Gluttony", description: "When one is unable to feel sated, he or she may over-indulge until the thing they crave does them serious harm." }
  },
  {
    id: 28,
    sideA: { type: "Emotion", title: "Compassion", description: "Love and compassion are the focus. This may represent a specific instance of charity, affection, kindness, generosity, or mercy." },
    sideB: { type: "Emotion", title: "Cruelty", description: "Someone is deliberately causing physical or mental suffering. Can represent an act of cruelty, the effect of such abuse, or a person with a sadistic nature." }
  },
  {
    id: 29,
    sideA: { type: "Identity", title: "The Executioner", description: "This killer is dispassionate or even friendly toward the intended victim, but feels quite strongly about the fee paid for completing the job." },
    sideB: { type: "Identity", title: "The Assassin", description: "Whether driven by vendetta or ideology, this hunter will stop at nothing until blood has been spilled." }
  },
  {
    id: 30,
    sideA: { type: "Wealth", title: "Time", description: "Time is of utmost importance, whether it is the ticking of a bomb, the passage of hours, years, centuries, or millennia." },
    sideB: { type: "Wealth", title: "Stasis", description: "Time stands still or at least seems to. Could be a literal stoppage of time's passage, horrible boredom, or just a moment of such intense clarity that it feels like it lasts a lifetime." }
  },
  {
    id: 31,
    sideA: { type: "Identity", title: "The Doctor", description: "This person is a Western M.D., a Chinese herbalist, a tribal healer, or any other person whose gift is to heal the body." },
    sideB: { type: "Identity", title: "The Counselor", description: "Doctor, priest, or shaman, this person is able to heal emotional or psychological illnesses." }
  },
  {
    id: 32,
    sideA: { type: "Destiny", title: "The Goal", description: "The goal is clearly in sight, either literally or within one's mind." },
    sideB: { type: "Destiny", title: "Adrift", description: "Sight of the goal is lost, or the goal itself proves to be false or unworthy of pursuit." }
  },
  {
    id: 33,
    sideA: { type: "Destiny", title: "Demolition", description: "Though something important is destroyed, the loss clears the way for something new." },
    sideB: { type: "Destiny", title: "Destruction", description: "A catastrophic physical disaster may affect only a single individual or threaten the entirety of humanity." }
  },
  {
    id: 34,
    sideA: { type: "Wealth", title: "Wealth", description: "A gain or increase in material wealth. Could manifest as a comfortable house, a well-paying job, or just cold hard cash." },
    sideB: { type: "Wealth", title: "Poverty", description: "The lack of material wealth, and the trappings thereof, whether suddenly lost or never possessed in the first place." }
  },
  {
    id: 35,
    sideA: { type: "Emotion", title: "The Relative", description: "Whether making soup for the ill or providing a shoulder to cry on, nobody understands or cares like family." },
    sideB: { type: "Emotion", title: "The Meddler", description: "Even the most genuinely concerned relative can be too eager to assist. This help may be unwelcome or driven by selfish motives." }
  },
  {
    id: 36,
    sideA: { type: "Identity", title: "Age", description: "What has been lost in strength and agility has been replaced with wisdom and experience. One's skills and knowledge may head off problems, but if not, the way past them may be arduous." },
    sideB: { type: "Identity", title: "Youth", description: "Enthusiasm and energy push one forward, driven by a naive and simplistic worldview. Mistakes are more likely, but youthful resilience will help one survive them." }
  },
  {
    id: 37,
    sideA: { type: "Identity", title: "Infamy", description: "A person's name is known by all, but rather than praised, he or she is cursed, reviled, or feared." },
    sideB: { type: "Identity", title: "Fame", description: "A person's name is known and celebrated by all, or someone has a strong desire to have such fame." }
  },
  {
    id: 38,
    sideA: { type: "Destiny", title: "Harmony", description: "Whether taking the form of the physical environment or the general populace, the forces of the external world are united in providing support." },
    sideB: { type: "Destiny", title: "Adversity", description: "Someone just can't get a break; the world or its people seem to be determined to provide nothing but resistance." }
  },
  {
    id: 39,
    sideA: { type: "Will", title: "The Burden", description: "One's loyalty is severely tested by a friend who has done something wrong, or is asking for support in an undertaking almost certain to end in disaster." },
    sideB: { type: "Will", title: "The Friend", description: "The buddy, the chum or the lover, this reliable person is family by choice, a relationship often even closer than blood." }
  },
  {
    id: 40,
    sideA: { type: "Will", title: "Innocence", description: "There are many who believe that innocence is the original sin. One must know the difference between good and evil to make an informed choice, and that knowledge may be lacking." },
    sideB: { type: "Will", title: "Gnosis", description: "A firm understanding of the difference between good and evil allows one to choose with certainty, but one must still make that choice." }
  },
  {
    id: 41,
    sideA: { type: "Will", title: "The Wolf", description: "Sometimes the Monster is cloaked in a perfectly mundane guise, easily mistaken for one of the sheep. That doesn't make it any less repulsive or dangerous." },
    sideB: { type: "Will", title: "The Monster", description: "Raw, unthinking destruction, chaos made flesh. This is the bogeyman, the ripper, the source of all fears and nightmares." }
  },
  {
    id: 42,
    sideA: { type: "Wealth", title: "Charity", description: "Whether one is rich or poor, sharing with those who have less can be its own reward." },
    sideB: { type: "Wealth", title: "Envy", description: "If one feels the universe is rewarding others unfairly, the bitterness that sets in can be all-consuming." }
  },
  {
    id: 43,
    sideA: { type: "Emotion", title: "Trust", description: "A leap of faith must be made. Either someone is asking to be trusted, or one may be having difficulty finding the courage to trust one's self." },
    sideB: { type: "Emotion", title: "Betrayal", description: "Trust has been misplaced. A traitor is revealed, or someone abandons the cause he or she had sworn allegiance to." }
  },
  {
    id: 44,
    sideA: { type: "Destiny", title: "Injustice", description: "Justice is thwarted. The greedy and corrupt win the day, threatening all that is good and right." },
    sideB: { type: "Destiny", title: "Justice", description: "Justice prevails. The fair and the right triumph over their enemies." }
  },
  {
    id: 45,
    sideA: { type: "Emotion", title: "Fear", description: "Terror controls one's actions, causing paralysis and blindness to reason." },
    sideB: { type: "Emotion", title: "Courage", description: "Emotional fortitude is found. Even in the face of impending doom, the will to go on is within reach." }
  },
  {
    id: 46,
    sideA: { type: "Wealth", title: "Loss", description: "Something ceases to exist. It is not just lost to the person who possessed it, it is no more." },
    sideB: { type: "Wealth", title: "Creation", description: "Something is brought into existence where before there was nothing." }
  },
  {
    id: 47,
    sideA: { type: "Destiny", title: "Obliviousness", description: "The truth is missed, refused, or ignored, no matter how dramatically it is revealed." },
    sideB: { type: "Destiny", title: "Epiphany", description: "In an overwhelming instant, the true nature of the universe and one's place in it are revealed." }
  },
  {
    id: 48,
    sideA: { type: "Wealth", title: "The Gamble", description: "Putting things held dear on the line, hoping to profit from the bet. The prize seems worth risking the high price for losing." },
    sideB: { type: "Wealth", title: "Safety", description: "Sticking to bets where the odds of winning are stacked in one's favor. Taken to an extreme, a person might never leave their house to avoid taking any risk." }
  },
  {
    id: 49,
    sideA: { type: "Identity", title: "Addiction", description: "Chronic substance abuse or emotional dependence blot out reason and dominate motivation, making someone dependent on something or someone." },
    sideB: { type: "Identity", title: "Withdrawal", description: "The thing one is addicted to is suddenly taken away or is no longer available, causing pain and panic." }
  },
  {
    id: 50,
    sideA: { type: "Will", title: "The Mentor", description: "This person might be a professor, a professional who takes an apprentice, or even a martial arts sensei. His or her gift is helping others with growth or training in a specific skill or craft." },
    sideB: { type: "Will", title: "The Master", description: "Someone who has been in training for many years is finally acknowledged as a master and may be called upon to employ that skill in the service of a cause." }
  },
  {
    id: 51,
    sideA: { type: "Emotion", title: "Confession", description: "Even if the cost is great, the secret must be revealed. Either the emotional toll of keeping the secret is too high, or remaining silent will prevent the goal from being reached." },
    sideB: { type: "Emotion", title: "The Secret", description: "The consequences of the secret being revealed would be catastrophic. It must be kept at all costs." }
  },
  {
    id: 52,
    sideA: { type: "Destiny", title: "Chaos", description: "Chaos prevails. Rationality and predictability give way to random or seemingly insane events." },
    sideB: { type: "Destiny", title: "Order", description: "Order prevails. Even if things go poorly, they behave as expected." }
  },
  {
    id: 53,
    sideA: { type: "Emotion", title: "Sacred", description: "This person, object, or situation is sanctified by God, pure and holy. Supernatural powers or protection may surround it or come from it." },
    sideB: { type: "Emotion", title: "Profane", description: "Pure evil, a blight on mankind, God, and the Universe. Nothing but pain, loss, and damnation can come from this." }
  },
  {
    id: 54,
    sideA: { type: "Will", title: "Madness", description: "Clear thinking breaks down and gives way to hysteria. Can be indicative of either mental illness or damage from psychological trauma." },
    sideB: { type: "Will", title: "Sanity", description: "Calm hearts go hand in hand with keen minds. Clarity of thought and understanding are paramount." }
  },
  {
    id: 55,
    sideA: { type: "Will", title: "Amnesia", description: "The inability to remember. Someone may be literally struck with amnesia or just be unable to remember a single crucial fact." },
    sideB: { type: "Will", title: "Memory", description: "An issue turns on the ability to remember something, or the memory itself triggers an important association. Could also indicate someone regaining their memory after a serious case of amnesia." }
  },
  {
    id: 56,
    sideA: { type: "Identity", title: "War", description: "Negotiations break down. No equitable solutions can be agreed upon. Conflict escalates to violent combat." },
    sideB: { type: "Identity", title: "Peace", description: "Conflict is resolved without violence. Differences are settled with diplomacy. Mutually satisfying agreements are reached." }
  },
  {
    id: 57,
    sideA: { type: "Destiny", title: "Corruption", description: "Power is misused, or someone is corrupted by power." },
    sideB: { type: "Destiny", title: "Power", description: "A source of enormous power can be tapped into and harnessed, though first it must be attained." }
  },
  {
    id: 58,
    sideA: { type: "Destiny", title: "The Protagonist", description: "The main character's destiny, welfare, interests, or fate are of utmost importance." },
    sideB: { type: "Destiny", title: "The Antihero", description: "The Protagonist may be someone whose goals and values are noble and good, but whose methods for achieving them are questionable." }
  },
  {
    id: 59,
    sideA: { type: "Destiny", title: "Rebirth", description: "What was lost is suddenly regained. Health returns after being sick, injured, or even dead. Could also be a metaphorical rebirth, a rekindling of purpose, or escape from damnation." },
    sideB: { type: "Destiny", title: "Relapse", description: "Forces or patterns that were thought to be left behind rise anew, stronger than ever." }
  },
  {
    id: 60,
    sideA: { type: "Destiny", title: "Strength", description: "Though the task at hand is daunting, the strength to see it through, whatever the cost, is within reach." },
    sideB: { type: "Destiny", title: "Weakness", description: "Either through physical weakness or a lack of conviction, failure is likely." }
  },
  {
    id: 61,
    sideA: { type: "Wealth", title: "Desire", description: "A fire burns inside, filling one with a deep passion to possess someone or something, even if he or she must surmount substantial obstacles to acquire it." },
    sideB: { type: "Wealth", title: "Aversion", description: "Whether through a phobia or from genuine distaste, someone is strongly repulsed by something and may go to great lengths to avoid it." }
  },
  {
    id: 62,
    sideA: { type: "Will", title: "Turmoil", description: "Nothing is still or at rest, all is drowned out in noise and chaotic action. Even if things are going well, they are progressing frenetically." },
    sideB: { type: "Will", title: "Tranquility", description: "The complete absence of conflict and strife. Even if things aren't good, they are at least peaceful and still. Often, this turns out to be the calm before the storm." }
  },
  {
    id: 63,
    sideA: { type: "Will", title: "Nescience", description: "When intuition and deduction both fail, one is left with no inkling of what is really going on around them." },
    sideB: { type: "Will", title: "Intuition", description: "Sometimes instinct is more accurate than deduction. Listening to hunches and feelings from the subconscious mind is important and more likely to pay off." }
  },
  {
    id: 64,
    sideA: { type: "Will", title: "Compulsion", description: "Regardless of the rationality, one is gripped with an irresistible impulse to do something. The motivator could also be external coercion." },
    sideB: { type: "Will", title: "Obsession", description: "A single thought crowds out all others. One is fixated on another person or thing to the point of mania." }
  },
  {
    id: 65,
    sideA: { type: "Identity", title: "Disguise", description: "Someone has assumed a false identity, traveling incognito, lying about his or her credentials, or concealing an unsavory past." },
    sideB: { type: "Identity", title: "Identity", description: "Knowing who someone really is becomes of utmost importance." }
  },
  {
    id: 66,
    sideA: { type: "Identity", title: "The Outsider", description: "Some people just don't belong. Whether it's a club, profession, tribe, or culture, this person is clearly not included or welcome." },
    sideB: { type: "Identity", title: "The Outcast", description: "Someone who had been previously admired by others is suddenly shunned and must come to terms with being cast out." }
  },
  {
    id: 67,
    sideA: { type: "Destiny", title: "Victory", description: "Glory rains down as opposition is overcome and the goal is achieved." },
    sideB: { type: "Destiny", title: "Defeat", description: "Failure to achieve the goal results in loss and despair." }
  },
  {
    id: 68,
    sideA: { type: "Destiny", title: "The Angel", description: "The highest forces in the universe stand united in support of the situation and protect all involved from harm." },
    sideB: { type: "Destiny", title: "The Devil", description: "The universe itself becomes the opponent, rising up to prevent the goal from being reached." }
  },
  {
    id: 69,
    sideA: { type: "Emotion", title: "The Prodigy", description: "The 'golden child' is loved and admired by all. It is felt that this person can do no wrong, whether it is true or not." },
    sideB: { type: "Emotion", title: "The Black Sheep", description: "This person has always been held in suspicion or actively shunned by others for having a legendarily bad reputation, even if it isn't earned." }
  },
  {
    id: 70,
    sideA: { type: "Wealth", title: "Red Tape", description: "Someone becomes tangled in a web of bureaucracy, struggling not to be victimized by others or become mired in endless forms and procedures." },
    sideB: { type: "Wealth", title: "The Bureaucrat", description: "As someone who accepts or even embraces bureaucracy, this person could be a powerful foe or ally in the political or financial arenas." }
  },
  {
    id: 71,
    sideA: { type: "Wealth", title: "The MacGuffin", description: "The object believed to be valuable is actually worthless. It may be a forgery or misidentified. If it is the real thing, it has lost whatever qualities once made it so precious." },
    sideB: { type: "Wealth", title: "The Black Bird", description: "A legendary object of incredible value or power that many would be willing to fight, kill, or die to possess." }
  },
  {
    id: 72,
    sideA: { type: "Destiny", title: "The Antagonist", description: "This card may represent the Antagonist literally or other external forces aligned against the good of the Protagonist." },
    sideB: { type: "Destiny", title: "Self Defeat", description: "It is not external opposition that causes one to fail, it is his or her own weakness or other internal flaws." }
  },
  {
    id: 73,
    sideA: { type: "Wealth", title: "Contentment", description: "One is satisfied with the level of wealth he or she has attained. While having more might be welcome, it isn't necessary or even strongly desired." },
    sideB: { type: "Wealth", title: "Greed", description: "For some people, the word enough has no meaning. Whether it is food, wealth or pleasure, if it is available they will take as much of it as possible, whether he or she has earned it or not." }
  },
  {
    id: 74,
    sideA: { type: "Destiny", title: "The Hidden", description: "Forces are reaching out from beyond the normal realm, attempting to intervene in mortal affairs for good or ill." },
    sideB: { type: "Destiny", title: "The Threshold", description: "Someone is being drawn into other realms, beginning a voyage that largely takes place outside the normal world." }
  },
  {
    id: 75,
    sideA: { type: "Identity", title: "Health", description: "The body is strong and free from disease. Can be a generally good constitution or a return to health after having been injured or sick." },
    sideB: { type: "Identity", title: "Illness", description: "The body falls prey to a disease or injury." }
  },
  {
    id: 76,
    sideA: { type: "Identity", title: "Pain", description: "Actions are driven purely by physical or emotional pain; either to put an end to the suffering or to strike out at the source." },
    sideB: { type: "Identity", title: "Pleasure", description: "Whether as a goal or a reward for hard work, pleasure becomes the focus of attention." }
  },
  {
    id: 77,
    sideA: { type: "Emotion", title: "The Manipulator", description: "Some do not need a gun to get others to do their bidding. This person's weapons are flattery, lies, guilt, blackmail, or bullying." },
    sideB: { type: "Emotion", title: "The Leech", description: "An emotionally starved person who drains time and energy from others. His or her life is always a tragedy. No amount of support or assistance will ever be enough." }
  },
  {
    id: 78,
    sideA: { type: "Emotion", title: "Marriage", description: "The institution of marriage, a proposal, or entrance into a permanent relationship. There is no guarantee that it will be happy, but it will be solid and committed." },
    sideB: { type: "Emotion", title: "Infidelity", description: "One of the partners in a marriage or other permanent relationship goes astray, taking their affection and attention to another." }
  }
];

const SPREADS = [
  {
    id: 1,
    name: "Once Upon A Time...",
    points: [
      "The Protagonist Before The Story",
      "The Status Quo",
      "What Makes The Situation Unstable",
      "What Makes The Protagonist Resist Getting Involved",
      "What Overcomes That Resistance",
      "What Propels The Protagonist Into Action",
      "The Direction The Protagonist is Pushed",
      "The Apparent Goal"
    ]
  },
  {
    id: 2,
    name: "Character Backstory",
    points: [
      "The Character's Mother",
      "The Character's Father",
      "The Strength Of The Relationship",
      "The Problems Between Them",
      "The Circumstance Of The Character's Birth",
      "Complications of Birth, If Any",
      "The Universe's Influence On Their Nature",
      "Early Strengths",
      "Early Weaknesses",
      "Education",
      "Belief Foundation",
      "Life Experience",
      "A Shaping Experience In Recent Times",
      "An Experience That Left Scars",
      "The State Of The Character At The Beginning Of The Story"
    ]
  },
  {
    id: 3,
    name: "Character Quick Pick (good for minor characters)",
    points: [
      "The Character's Base Nature",
      "The Influence of the Universe",
      "Their \"Achilles' heel\"",
      "The Influence of Family and/or Friends",
      "The Character's Driving Passion",
      "The Character's Destiny",
      "What Stands Between Them And Their Destiny"
    ]
  },
  {
    id: 4,
    name: "The Hero's Journey",
    points: [
      "The Unchanged World",
      "The Call To Adventure",
      "Refusal Of The Call",
      "Supernatural Aid",
      "The Threshold",
      "The Guardian",
      "The Guide",
      "The Initiation",
      "The Road Of Trials",
      "Temptation Away From The True Path",
      "The Abyss",
      "Apotheosis",
      "Meeting With The Goddess",
      "Atonement With The Father",
      "The Ultimate Boon",
      "The Price Of The Boon",
      "The Refusal Of The Return",
      "The Magic Flight",
      "Rescue From Without",
      "Return Across The Threshold",
      "The Master Of Two Worlds",
      "The Freedom To Live"
    ]
  },
  {
    id: 5,
    name: "The Train Crash (a head-on collision between two characters)",
    points: [
      "Character-A Before The Conflict",
      "Character-B Before The Conflict",
      "What Draws A Into Conflict With B",
      "What Draws B Into Conflict With A",
      "What A Brings To The Conflict",
      "What B Brings To The Conflict",
      "The Nature Of The Battle",
      "The Outcome"
    ]
  },
  {
    id: 6,
    name: "Film Noir",
    points: [
      "The Protagonist",
      "What Is Wrong With Them",
      "What They Want",
      "Why They Can't Have It",
      "Who Tempts Them Into Going For It Anyway",
      "The Double Cross",
      "The Cruel Twist Of Fate",
      "The Tragic Outcome"
    ]
  },
  {
    id: 7,
    name: "The Love Story",
    points: [
      "Lover-A",
      "Lover-B",
      "How They First Meet",
      "What Prevents Them From Being Together Immediately",
      "The Influence Of The Universe",
      "The Influence Of Family and/or Friends",
      "The Nature Of The Pursuit",
      "The Obstacle To Be Overcome",
      "The Outcome"
    ]
  },
  {
    id: 8,
    name: "The Action Movie",
    points: [
      "The World At Rest",
      "What Is Threatened",
      "Who Is Threatening It (The Villain)",
      "Why They Are Doing It",
      "The Hero",
      "What Makes The Hero Special",
      "The Hero's Weakness",
      "The Hero's First Move",
      "The Villain Reacts",
      "The Villain Strikes At The Hero",
      "The Hero Counters",
      "The Climactic Battle",
      "The Outcome",
      "The Hero's Fate",
      "The Villain's Fate"
    ]
  },
  {
    id: 9,
    name: "The Crossroads (working a moral dilemma)",
    points: [
      "The Nature Of The Decision To Be Made",
      "What Is Making The Decision Difficult",
      "The Consequences Of Avoiding The Decision",
      "The Nature Of The Obvious Path",
      "The Consequences Of Taking The Selfish Path",
      "The Potential Reward For Taking The Hard Road"
    ]
  }
];

// ==================== STATE MANAGEMENT ====================

let currentView = 'menu'; // 'menu' or 'spread'
let currentSpread = null;
let spreadState = {
  cards: [], // Array of { cardId, side ('A' or 'B'), highlight ('A', 'B', or null), locked: boolean }
};

// ==================== UTILITY FUNCTIONS ====================

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function getRandomCards(count, excludeIds = []) {
  const availableCards = TAROT_CARDS.filter(card => !excludeIds.includes(card.id));
  const shuffled = shuffleArray(availableCards);
  return shuffled.slice(0, count);
}

function getCardById(id) {
  return TAROT_CARDS.find(card => card.id === id);
}

function getSpreadById(id) {
  return SPREADS.find(spread => spread.id === id);
}

// ==================== SPREAD GENERATION ====================

function generateSpread(spreadId) {
  const spread = getSpreadById(spreadId);
  if (!spread) return;

  const numPoints = spread.points.length;
  const selectedCards = getRandomCards(numPoints);

  spreadState.cards = selectedCards.map(card => ({
    cardId: card.id,
    side: Math.random() < 0.5 ? 'A' : 'B', // Random initial side
    highlight: null, // 'A', 'B', or null
    locked: false
  }));

  currentSpread = spread;
  currentView = 'spread';
}

function rerollPoint(pointIndex) {
  if (spreadState.cards[pointIndex].locked) return;

  const usedCardIds = spreadState.cards.map(c => c.cardId);
  const excludeIds = usedCardIds.filter((id, idx) => idx !== pointIndex);
  const newCards = getRandomCards(1, excludeIds);

  if (newCards.length > 0) {
    spreadState.cards[pointIndex] = {
      cardId: newCards[0].id,
      side: Math.random() < 0.5 ? 'A' : 'B',
      highlight: null,
      locked: false
    };
  }
}

function rerollAllPoints() {
  const lockedIndices = spreadState.cards
    .map((card, idx) => card.locked ? idx : -1)
    .filter(idx => idx !== -1);

  const lockedCardIds = lockedIndices.map(idx => spreadState.cards[idx].cardId);
  const numUnlocked = spreadState.cards.length - lockedIndices.length;

  const newCards = getRandomCards(numUnlocked, lockedCardIds);

  let newCardIndex = 0;
  for (let i = 0; i < spreadState.cards.length; i++) {
    if (!spreadState.cards[i].locked) {
      spreadState.cards[i] = {
        cardId: newCards[newCardIndex].id,
        side: Math.random() < 0.5 ? 'A' : 'B',
        highlight: null,
        locked: false
      };
      newCardIndex++;
    }
  }
}

function toggleLock(pointIndex) {
  spreadState.cards[pointIndex].locked = !spreadState.cards[pointIndex].locked;
}

function toggleHighlight(pointIndex, side) {
  const currentHighlight = spreadState.cards[pointIndex].highlight;

  if (currentHighlight === side) {
    spreadState.cards[pointIndex].highlight = null; // Un-highlight
  } else {
    spreadState.cards[pointIndex].highlight = side; // Highlight this side
  }
}

// ==================== URL SHARING ====================

function encodeSpreadToURL() {
  const data = {
    spreadId: currentSpread.id,
    cards: spreadState.cards.map(c => ({
      id: c.cardId,
      side: c.side,
      highlight: c.highlight,
      locked: c.locked
    }))
  };
  const encoded = btoa(JSON.stringify(data));
  const url = `${window.location.origin}${window.location.pathname}?blueprint=${encoded}`;
  return url;
}

function decodeSpreadFromURL() {
  const params = new URLSearchParams(window.location.search);
  const blueprint = params.get('blueprint');

  if (!blueprint) return false;

  try {
    const data = JSON.parse(atob(blueprint));
    const spread = getSpreadById(data.spreadId);

    if (!spread) return false;

    currentSpread = spread;
    spreadState.cards = data.cards.map(c => ({
      cardId: c.id,
      side: c.side,
      highlight: c.highlight || null,
      locked: c.locked || false
    }));
    currentView = 'spread';

    return true;
  } catch (e) {
    console.error('Failed to decode blueprint:', e);
    return false;
  }
}

function shareBlueprint() {
  const url = encodeSpreadToURL();

  // Copy to clipboard
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      alert('Blueprint URL copied to clipboard!');
    }).catch(() => {
      prompt('Copy this URL to share your blueprint:', url);
    });
  } else {
    prompt('Copy this URL to share your blueprint:', url);
  }
}

// ==================== EXPORT FUNCTIONS ====================

function exportAsImage() {
  const spreadElement = document.getElementById('spread-container');

  // Using html2canvas library (needs to be included)
  if (typeof html2canvas !== 'undefined') {
    html2canvas(spreadElement, {
      backgroundColor: '#1a1a2e',
      scale: 2
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `story-forge-${currentSpread.name.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  } else {
    alert('Export feature requires html2canvas library. Please include it in your HTML.');
  }
}

function printSpread() {
  window.print();
}

// ==================== RENDERING ====================

function renderMenu() {
  return `
    <div class="menu-container">
      <h1 class="main-title">Story Forge</h1>
      <p class="subtitle">Select a spread to begin crafting your story</p>

      <div class="spreads-grid">
        ${SPREADS.map(spread => `
          <button class="spread-card" onclick="selectSpread(${spread.id})">
            <h3>${spread.name}</h3>
            <p class="point-count">${spread.points.length} points</p>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSpread() {
  if (!currentSpread) return '';

  return `
    <div class="spread-view">
      <div class="spread-header">
        <button class="back-button" onclick="backToMenu()">← Back to Menu</button>
        <h2 class="spread-title">${currentSpread.name}</h2>
        <div class="spread-actions">
          <button class="action-button" onclick="rerollAllPoints(); render()">
            🔄 Reroll All
          </button>
          <button class="action-button" onclick="shareBlueprint()">
            🔗 Share
          </button>
          <button class="action-button" onclick="exportAsImage()">
            📸 Export
          </button>
          <button class="action-button" onclick="printSpread()">
            🖨️ Print
          </button>
        </div>
      </div>

      <div class="points-container" id="spread-container">
        ${spreadState.cards.map((cardState, index) => {
          const card = getCardById(cardState.cardId);
          if (!card) return '';

          const sideAHighlighted = cardState.highlight === 'A';
          const sideBHighlighted = cardState.highlight === 'B';

          return `
            <div class="point-card ${cardState.locked ? 'locked' : ''}">
              <div class="point-header">
                <h3 class="point-title">${currentSpread.points[index]}</h3>
                <div class="point-controls">
                  <button
                    class="control-button lock-button ${cardState.locked ? 'active' : ''}"
                    onclick="toggleLock(${index}); render()"
                    title="${cardState.locked ? 'Unlock' : 'Lock'}"
                  >
                    ${cardState.locked ? '🔒' : '🔓'}
                  </button>
                  <button
                    class="control-button reroll-button"
                    onclick="rerollPoint(${index}); render()"
                    title="Reroll this point"
                    ${cardState.locked ? 'disabled' : ''}
                  >
                    🔄
                  </button>
                </div>
              </div>

              <div class="card-display">
                <div class="card-number">Card ${card.id}</div>

                <div class="card-sides">
                  <div
                    class="card-side side-a ${sideAHighlighted ? 'highlighted' : ''}"
                    onclick="toggleHighlight(${index}, 'A'); render()"
                  >
                    <div class="side-label">Side A</div>
                    <div class="card-type">${card.sideA.type}</div>
                    <h4 class="card-title">${card.sideA.title}</h4>
                    <p class="card-description">${card.sideA.description}</p>
                  </div>

                  <div class="card-divider"></div>

                  <div
                    class="card-side side-b ${sideBHighlighted ? 'highlighted' : ''}"
                    onclick="toggleHighlight(${index}, 'B'); render()"
                  >
                    <div class="side-label">Side B</div>
                    <div class="card-type">${card.sideB.type}</div>
                    <h4 class="card-title">${card.sideB.title}</h4>
                    <p class="card-description">${card.sideB.description}</p>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function render() {
  const app = document.getElementById('app');

  if (currentView === 'menu') {
    app.innerHTML = renderMenu();
  } else if (currentView === 'spread') {
    app.innerHTML = renderSpread();
  }
}

// ==================== EVENT HANDLERS ====================

function selectSpread(spreadId) {
  generateSpread(spreadId);
  render();
}

function backToMenu() {
  currentView = 'menu';
  currentSpread = null;
  spreadState = { cards: [] };

  // Clear URL parameters
  window.history.pushState({}, '', window.location.pathname);

  render();
}

// ==================== INITIALIZATION ====================

function init() {
  // Check if there's a blueprint in the URL
  const hasBlueprint = decodeSpreadFromURL();

  // Initial render
  render();
}

// ==================== STYLES ====================

const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: #eee;
    min-height: 100vh;
    padding: 20px;
  }

  #app {
    max-width: 1400px;
    margin: 0 auto;
  }

  /* Menu Styles */
  .menu-container {
    text-align: center;
    padding: 40px 20px;
  }

  .main-title {
    font-size: 4rem;
    margin-bottom: 10px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
  }

  .subtitle {
    font-size: 1.2rem;
    color: #aaa;
    margin-bottom: 50px;
  }

  .spreads-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .spread-card {
    background: linear-gradient(135deg, #2d3561 0%, #1f2544 100%);
    border: 2px solid #3d4677;
    border-radius: 15px;
    padding: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  .spread-card:hover {
    transform: translateY(-5px);
    border-color: #667eea;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  .spread-card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #fff;
  }

  .point-count {
    color: #667eea;
    font-size: 1rem;
  }

  /* Spread View Styles */
  .spread-view {
    padding: 20px 0;
  }

  .spread-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    flex-wrap: wrap;
    gap: 15px;
  }

  .back-button {
    background: #2d3561;
    border: 2px solid #3d4677;
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .back-button:hover {
    background: #3d4677;
    border-color: #667eea;
  }

  .spread-title {
    font-size: 2.5rem;
    flex: 1;
    text-align: center;
    color: #fff;
  }

  .spread-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .action-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
  }

  .action-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(102, 126, 234, 0.5);
  }

  /* Point Cards */
  .points-container {
    display: grid;
    gap: 25px;
  }

  .point-card {
    background: linear-gradient(135deg, #2d3561 0%, #1f2544 100%);
    border: 2px solid #3d4677;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  .point-card.locked {
    border-color: #f39c12;
    box-shadow: 0 4px 15px rgba(243, 156, 18, 0.3);
  }

  .point-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #3d4677;
  }

  .point-title {
    font-size: 1.5rem;
    color: #fff;
  }

  .point-controls {
    display: flex;
    gap: 10px;
  }

  .control-button {
    background: #3d4677;
    border: 2px solid #4d5687;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .control-button:hover:not(:disabled) {
    background: #4d5687;
    border-color: #667eea;
  }

  .control-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .lock-button.active {
    background: #f39c12;
    border-color: #e67e22;
  }

  /* Card Display */
  .card-display {
    position: relative;
  }

  .card-number {
    position: absolute;
    top: -10px;
    right: 10px;
    background: #667eea;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .card-sides {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 20px;
  }

  .card-side {
    background: rgba(61, 70, 119, 0.3);
    border: 2px solid #3d4677;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  .card-side:hover {
    background: rgba(61, 70, 119, 0.5);
    border-color: #667eea;
  }

  .card-side.highlighted {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%);
    border: 3px solid #667eea;
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
  }

  .side-label {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.3);
    padding: 3px 8px;
    border-radius: 5px;
    font-size: 0.8rem;
    color: #aaa;
  }

  .card-type {
    font-size: 0.85rem;
    color: #667eea;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .card-title {
    font-size: 1.3rem;
    color: #fff;
    margin-bottom: 10px;
  }

  .card-description {
    font-size: 1rem;
    color: #ccc;
    line-height: 1.6;
  }

  .card-divider {
    width: 2px;
    background: linear-gradient(to bottom, transparent, #667eea, transparent);
  }

  /* Print Styles */
  @media print {
    body {
      background: white;
      color: black;
    }

    .spread-header {
      page-break-after: avoid;
    }

    .point-card {
      page-break-inside: avoid;
      border: 2px solid #333;
      margin-bottom: 20px;
    }

    .back-button,
    .spread-actions,
    .point-controls {
      display: none;
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .main-title {
      font-size: 2.5rem;
    }

    .spread-title {
      font-size: 1.8rem;
    }

    .card-sides {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
    }

    .card-divider {
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, transparent, #667eea, transparent);
    }

    .spread-header {
      flex-direction: column;
      align-items: stretch;
    }

    .spread-title {
      order: -1;
      margin-bottom: 15px;
    }
  }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
