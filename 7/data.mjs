class Bag {

    constructor(bag, contents) {
        this.name = bag;
        this.contentNames = contents;
        this.bags = []
    }

    add(bag) {
        this.bags.push(bag);
    }

    getContentNames() {
        return bagName.slice(bagName.indexOf(' ') + 1, bagName.length)
    }

}

export const data = `drab tan bags contain 4 clear gold bags.
vibrant lime bags contain 3 faded gold bags, 3 plaid aqua bags, 2 clear black bags.
pale lime bags contain 1 dim salmon bag, 5 faded salmon bags, 1 dim turquoise bag.
dull gray bags contain 1 striped gold bag, 1 vibrant yellow bag.
light fuchsia bags contain 4 light lavender bags, 5 faded olive bags, 4 plaid cyan bags, 1 striped tomato bag.
drab gold bags contain 1 clear teal bag.
dim red bags contain 2 dull teal bags.
striped orange bags contain 1 bright fuchsia bag, 3 plaid chartreuse bags, 4 dark silver bags, 5 dim maroon bags.
shiny violet bags contain 1 clear orange bag, 4 muted olive bags, 4 dark chartreuse bags, 4 shiny indigo bags.
faded olive bags contain 2 dotted silver bags, 4 clear gray bags.
dotted lime bags contain 1 dark turquoise bag, 1 striped orange bag, 2 shiny teal bags, 2 vibrant cyan bags.
drab magenta bags contain 4 bright yellow bags, 5 dull orange bags, 5 plaid tomato bags.
dull black bags contain 4 light olive bags.
posh turquoise bags contain 1 muted salmon bag, 1 muted black bag, 5 shiny turquoise bags.
muted purple bags contain 5 dotted red bags.
striped black bags contain 1 striped fuchsia bag, 4 drab indigo bags, 3 dark turquoise bags.
drab brown bags contain 3 clear gray bags, 1 light gray bag, 1 dull coral bag.
pale purple bags contain 5 mirrored black bags, 4 wavy crimson bags.
dark turquoise bags contain 1 dotted violet bag.
clear lavender bags contain 1 light olive bag, 4 wavy yellow bags, 4 plaid red bags, 2 faded salmon bags.
bright coral bags contain 2 bright brown bags.
posh coral bags contain 4 dull teal bags, 4 bright aqua bags.
drab lime bags contain 4 striped tan bags, 4 muted violet bags.
striped brown bags contain 1 dark lime bag, 4 clear orange bags.
wavy bronze bags contain 2 posh coral bags, 3 mirrored silver bags.
dim black bags contain 1 dark maroon bag, 4 muted lavender bags, 3 bright cyan bags, 3 dark plum bags.
posh yellow bags contain 4 dull plum bags, 5 shiny blue bags, 3 plaid tomato bags.
pale violet bags contain 1 plaid red bag, 2 posh fuchsia bags.
mirrored bronze bags contain 4 striped lavender bags.
vibrant silver bags contain 4 posh brown bags, 4 clear indigo bags, 4 dotted silver bags, 5 drab lavender bags.
dark brown bags contain 1 mirrored plum bag, 1 muted violet bag, 3 muted tomato bags.
wavy green bags contain 2 posh bronze bags, 3 dull purple bags, 1 wavy red bag.
light beige bags contain 3 light maroon bags, 3 vibrant orange bags, 4 clear blue bags, 3 mirrored fuchsia bags.
wavy crimson bags contain 5 muted beige bags, 2 dark olive bags.
clear tan bags contain 1 wavy yellow bag.
posh lime bags contain 3 wavy beige bags.
pale blue bags contain 5 dull aqua bags, 4 pale crimson bags, 4 clear indigo bags, 3 dull lime bags.
wavy silver bags contain 1 pale cyan bag.
striped beige bags contain 4 dim plum bags, 1 clear gray bag.
dim gold bags contain 3 dull cyan bags, 3 drab black bags, 4 dark green bags.
vibrant teal bags contain 5 clear green bags, 4 light violet bags, 2 bright beige bags.
light tan bags contain 5 pale red bags, 3 light turquoise bags, 2 mirrored chartreuse bags.
dark red bags contain 5 shiny lime bags, 3 clear blue bags, 1 posh black bag.
posh salmon bags contain 1 vibrant silver bag, 1 plaid salmon bag, 5 dark turquoise bags, 1 shiny orange bag.
mirrored yellow bags contain 5 posh gray bags, 1 shiny silver bag, 1 dark brown bag.
dark fuchsia bags contain 1 plaid plum bag.
bright bronze bags contain 4 dark turquoise bags.
posh silver bags contain 1 muted gold bag, 3 dull aqua bags, 2 striped chartreuse bags, 3 posh gray bags.
dotted salmon bags contain 2 vibrant bronze bags, 3 striped blue bags, 4 striped fuchsia bags.
dark orange bags contain 5 faded magenta bags.
bright silver bags contain 5 drab silver bags.
posh orange bags contain 4 plaid tan bags, 5 light tan bags.
mirrored olive bags contain 4 dull cyan bags, 4 posh black bags, 2 striped chartreuse bags.
drab beige bags contain 2 dark green bags, 2 bright maroon bags.
muted bronze bags contain 2 clear indigo bags, 1 clear green bag.
dark lime bags contain 3 wavy brown bags.
dark olive bags contain 4 muted gold bags, 1 shiny chartreuse bag.
dull white bags contain 2 muted crimson bags, 1 light maroon bag.
shiny gray bags contain 1 striped orange bag, 2 dim maroon bags.
dotted orange bags contain 1 dull teal bag, 1 light salmon bag, 4 shiny brown bags, 4 muted salmon bags.
clear olive bags contain 3 mirrored tan bags, 5 pale tan bags.
drab bronze bags contain 1 drab teal bag, 1 dark green bag.
drab chartreuse bags contain 4 dim beige bags.
faded cyan bags contain 5 clear gold bags.
plaid fuchsia bags contain 2 pale yellow bags.
light gold bags contain 5 pale cyan bags, 1 posh olive bag, 2 faded salmon bags, 5 pale tomato bags.
pale bronze bags contain 2 posh white bags.
shiny coral bags contain 2 plaid crimson bags, 1 clear turquoise bag.
vibrant green bags contain 4 shiny gold bags, 2 dim orange bags, 3 plaid chartreuse bags, 4 dark tomato bags.
vibrant violet bags contain 5 bright aqua bags, 5 clear purple bags.
muted fuchsia bags contain 2 bright yellow bags.
bright olive bags contain 5 bright gold bags, 5 plaid aqua bags, 5 dull black bags, 1 mirrored indigo bag.
mirrored maroon bags contain 2 dull chartreuse bags.
pale salmon bags contain 1 muted gold bag, 5 bright red bags, 5 mirrored tan bags, 1 muted salmon bag.
faded brown bags contain 3 plaid tomato bags, 2 muted olive bags, 5 dull orange bags, 2 dark silver bags.
dark lavender bags contain 4 dark tomato bags, 2 drab plum bags, 3 vibrant gray bags, 1 dim gold bag.
plaid coral bags contain 3 striped turquoise bags, 2 faded salmon bags.
drab black bags contain 1 vibrant black bag.
shiny black bags contain 3 posh gray bags, 3 shiny olive bags, 4 dull violet bags, 4 vibrant plum bags.
muted plum bags contain 4 dull violet bags, 5 pale tomato bags, 1 shiny brown bag, 1 dark plum bag.
shiny lavender bags contain 4 mirrored lavender bags.
mirrored blue bags contain 1 faded violet bag, 2 plaid olive bags.
dotted aqua bags contain 3 shiny yellow bags.
light lavender bags contain 2 bright maroon bags, 4 shiny lime bags, 3 dark maroon bags, 1 light silver bag.
bright orange bags contain 3 striped gold bags, 5 dotted violet bags.
muted tomato bags contain 5 clear blue bags, 5 mirrored fuchsia bags.
dim indigo bags contain 1 pale olive bag, 1 light indigo bag, 5 posh brown bags.
faded turquoise bags contain 3 pale chartreuse bags, 4 light olive bags.
wavy teal bags contain 3 clear brown bags, 3 dark beige bags.
dotted bronze bags contain 1 wavy brown bag.
posh purple bags contain 5 bright maroon bags, 1 clear silver bag, 2 shiny indigo bags.
dull violet bags contain 1 vibrant black bag.
drab indigo bags contain 4 light beige bags.
mirrored crimson bags contain 4 plaid bronze bags, 3 pale chartreuse bags, 2 mirrored olive bags, 4 muted lavender bags.
mirrored tan bags contain 2 posh brown bags, 3 dark red bags, 3 faded salmon bags.
wavy fuchsia bags contain 2 pale crimson bags, 1 plaid magenta bag, 2 drab plum bags, 1 drab aqua bag.
striped yellow bags contain 4 dark coral bags, 5 dim silver bags.
striped white bags contain 4 faded teal bags, 2 posh black bags, 3 vibrant yellow bags, 1 faded yellow bag.
light turquoise bags contain 4 dark red bags, 5 posh white bags, 1 vibrant bronze bag.
clear blue bags contain no other bags.
faded blue bags contain 5 clear indigo bags, 4 muted salmon bags, 3 bright violet bags, 4 dark purple bags.
dim aqua bags contain 4 posh gray bags, 1 clear bronze bag, 4 dull magenta bags, 5 plaid red bags.
shiny magenta bags contain 2 mirrored teal bags.
wavy maroon bags contain 1 dull cyan bag, 2 striped yellow bags, 2 light turquoise bags.
plaid teal bags contain 5 light olive bags, 2 vibrant green bags, 4 plaid yellow bags.
bright tomato bags contain 3 bright maroon bags, 3 clear blue bags, 5 posh lavender bags, 5 shiny lime bags.
mirrored lavender bags contain 5 striped bronze bags, 4 drab plum bags, 1 faded violet bag, 5 bright maroon bags.
vibrant purple bags contain 1 dull plum bag, 4 wavy yellow bags.
posh aqua bags contain 2 plaid teal bags, 3 pale tomato bags, 4 muted teal bags.
faded fuchsia bags contain 3 dark lavender bags, 4 plaid green bags, 5 drab gold bags.
dim silver bags contain 1 vibrant yellow bag, 1 clear tomato bag.
bright brown bags contain 3 striped white bags, 4 shiny orange bags.
dim olive bags contain 2 clear violet bags, 3 plaid gold bags, 3 plaid lime bags, 4 dim plum bags.
striped teal bags contain 2 bright lavender bags, 5 faded beige bags, 5 clear beige bags, 4 dotted turquoise bags.
posh plum bags contain 3 bright brown bags.
faded teal bags contain 4 bright aqua bags, 2 bright red bags, 2 dotted beige bags, 5 shiny teal bags.
striped indigo bags contain 5 clear cyan bags, 3 clear gray bags, 4 plaid olive bags, 3 plaid lime bags.
drab blue bags contain 2 dim coral bags, 4 plaid purple bags.
light olive bags contain 1 clear purple bag, 4 clear blue bags.
vibrant red bags contain 2 bright red bags, 2 pale gray bags, 4 wavy tomato bags.
faded salmon bags contain 5 posh brown bags.
shiny brown bags contain 2 dull green bags, 3 wavy lime bags.
posh olive bags contain 5 mirrored lavender bags, 3 clear gray bags.
clear green bags contain 2 faded aqua bags, 3 vibrant olive bags, 4 dim orange bags.
mirrored violet bags contain 5 wavy lime bags, 1 wavy chartreuse bag.
light brown bags contain 5 dark lavender bags.
plaid blue bags contain 3 plaid beige bags, 5 dotted teal bags.
dim green bags contain 1 light gray bag, 5 bright green bags.
mirrored plum bags contain 1 dark turquoise bag, 1 plaid black bag.
dotted turquoise bags contain 1 clear purple bag, 2 bright fuchsia bags.
dull salmon bags contain 3 faded lime bags, 1 striped gray bag, 3 dull gold bags.
wavy plum bags contain 4 shiny green bags, 3 pale tomato bags, 2 dull crimson bags.
bright blue bags contain 5 dull lavender bags, 5 drab black bags.
posh tomato bags contain 4 clear turquoise bags, 2 dim chartreuse bags, 4 bright aqua bags.
dotted lavender bags contain 4 wavy red bags.
posh magenta bags contain 3 light olive bags.
faded beige bags contain 5 muted olive bags, 4 bright maroon bags, 1 bright fuchsia bag.
vibrant plum bags contain 4 plaid crimson bags, 3 faded turquoise bags.
pale green bags contain 3 wavy tomato bags, 4 plaid indigo bags, 3 pale crimson bags.
dull fuchsia bags contain 2 clear gold bags.
light plum bags contain 5 dark plum bags, 1 striped white bag.
dotted olive bags contain 5 vibrant maroon bags.
striped gold bags contain 1 dull lime bag, 3 clear blue bags, 5 vibrant cyan bags.
bright violet bags contain 1 shiny lime bag, 1 muted tomato bag.
dim yellow bags contain 2 dull green bags.
bright indigo bags contain 4 light salmon bags, 3 wavy lavender bags, 3 light gold bags, 4 plaid olive bags.
plaid lime bags contain 5 plaid crimson bags, 5 dark bronze bags.
striped aqua bags contain 5 dark olive bags, 4 dull tomato bags, 5 pale gold bags, 1 dark silver bag.
dull maroon bags contain 2 pale teal bags, 5 light coral bags, 4 light magenta bags.
muted tan bags contain 2 clear yellow bags, 4 plaid indigo bags, 2 dotted crimson bags, 2 dim plum bags.
plaid tan bags contain 1 wavy beige bag, 4 dark chartreuse bags.
dull beige bags contain 3 posh cyan bags, 3 posh yellow bags, 4 wavy green bags, 1 striped brown bag.
posh cyan bags contain 1 faded yellow bag, 5 dark coral bags.
drab red bags contain 2 wavy lime bags, 2 posh brown bags.
drab gray bags contain 1 mirrored yellow bag, 2 plaid turquoise bags.
muted red bags contain 1 shiny silver bag, 2 pale coral bags, 5 dull plum bags.
drab green bags contain 4 shiny brown bags, 3 striped yellow bags, 5 clear blue bags.
dim gray bags contain 5 wavy maroon bags, 3 light tomato bags, 1 dim plum bag.
dark white bags contain 3 light brown bags.
posh black bags contain no other bags.
dim turquoise bags contain 3 dull fuchsia bags, 2 dull black bags.
drab lavender bags contain 3 pale maroon bags.
striped crimson bags contain 5 light coral bags.
vibrant olive bags contain 4 vibrant gold bags.
dim maroon bags contain 4 drab red bags, 3 pale salmon bags, 1 mirrored fuchsia bag, 3 dim coral bags.
muted lime bags contain 4 drab cyan bags, 1 muted beige bag.
drab purple bags contain 4 dotted gold bags.
muted beige bags contain 1 vibrant violet bag, 2 light lavender bags, 4 wavy maroon bags.
dotted green bags contain 1 wavy blue bag.
bright black bags contain 4 wavy chartreuse bags, 1 clear purple bag.
wavy yellow bags contain 2 posh lavender bags, 5 faded yellow bags.
faded yellow bags contain 4 posh black bags, 2 bright chartreuse bags, 5 bright fuchsia bags.
dim purple bags contain 2 faded lavender bags, 3 bright aqua bags, 4 mirrored fuchsia bags, 5 posh tomato bags.
bright chartreuse bags contain no other bags.
vibrant maroon bags contain 1 clear gold bag, 3 bright purple bags.
pale fuchsia bags contain 2 dark magenta bags.
dotted teal bags contain 5 shiny chartreuse bags.
dull lime bags contain 2 dotted violet bags, 3 vibrant cyan bags.
bright salmon bags contain 2 vibrant coral bags, 3 bright gray bags, 4 wavy beige bags, 1 faded green bag.
bright magenta bags contain 3 vibrant crimson bags, 1 striped fuchsia bag, 1 mirrored maroon bag.
striped red bags contain 4 vibrant indigo bags, 3 plaid black bags, 3 dark coral bags.
pale teal bags contain 3 shiny purple bags, 3 light turquoise bags, 5 bright aqua bags, 4 clear blue bags.
clear cyan bags contain 3 bright maroon bags, 3 shiny purple bags, 1 dark green bag, 5 muted olive bags.
muted gray bags contain 4 dark teal bags, 3 vibrant coral bags, 4 plaid red bags.
bright gold bags contain 2 faded indigo bags, 1 muted beige bag, 5 mirrored orange bags, 4 pale green bags.
clear red bags contain 3 plaid tomato bags, 2 dark violet bags.
striped purple bags contain 3 posh lavender bags.
plaid violet bags contain 5 mirrored gold bags.
shiny crimson bags contain 4 bright black bags, 2 wavy purple bags, 1 dark crimson bag.
posh gold bags contain 4 dull yellow bags.
dim crimson bags contain 3 drab white bags.
posh red bags contain 3 dull green bags, 1 striped red bag.
drab turquoise bags contain 5 clear beige bags, 3 dull orange bags, 3 shiny green bags, 5 dark yellow bags.
vibrant cyan bags contain no other bags.
light bronze bags contain 3 plaid magenta bags, 2 pale salmon bags, 1 dim orange bag, 2 vibrant blue bags.
dotted cyan bags contain 1 faded purple bag, 4 drab crimson bags.
drab fuchsia bags contain 4 plaid salmon bags.
clear maroon bags contain 4 dotted white bags, 1 dark olive bag, 1 dull red bag.
dim salmon bags contain 4 light green bags, 2 drab black bags, 4 drab lime bags.
wavy aqua bags contain 5 dull tan bags, 4 plaid crimson bags.
pale beige bags contain 2 faded lavender bags, 5 striped beige bags, 1 light teal bag.
dark maroon bags contain 2 bright tomato bags, 2 striped chartreuse bags, 5 bright maroon bags.
light aqua bags contain 3 faded yellow bags.
dim tan bags contain 5 light orange bags, 5 dark white bags, 1 dull green bag.
vibrant brown bags contain 2 plaid tomato bags.
light magenta bags contain 5 dotted violet bags, 2 faded crimson bags, 3 bright red bags, 5 mirrored turquoise bags.
clear turquoise bags contain 3 striped tan bags, 2 mirrored tan bags, 4 plaid black bags.
dull crimson bags contain 2 faded tomato bags, 4 dotted beige bags, 5 dim coral bags, 3 shiny coral bags.
dull orange bags contain 5 muted tomato bags, 5 dull lime bags, 4 faded salmon bags, 5 bright chartreuse bags.
wavy black bags contain 3 dark cyan bags, 3 clear red bags.
plaid olive bags contain 1 mirrored fuchsia bag, 5 dull purple bags, 1 bright fuchsia bag.
plaid indigo bags contain 3 mirrored tan bags, 1 mirrored olive bag, 1 striped turquoise bag, 1 dotted violet bag.
dim brown bags contain 4 faded teal bags.
muted indigo bags contain 1 mirrored plum bag, 5 pale gray bags, 5 faded salmon bags.
dull plum bags contain 4 mirrored cyan bags, 2 light coral bags, 3 dark violet bags, 4 striped fuchsia bags.
vibrant tan bags contain 2 clear white bags, 1 dim silver bag.
plaid tomato bags contain 3 dark green bags.
shiny white bags contain 1 dotted bronze bag, 2 faded gold bags, 1 drab tan bag.
plaid red bags contain 2 pale olive bags, 2 muted purple bags, 3 mirrored chartreuse bags.
drab orange bags contain 3 bright indigo bags, 3 pale salmon bags.
striped green bags contain 4 pale maroon bags, 4 muted brown bags, 2 bright tomato bags.
shiny indigo bags contain 4 clear teal bags, 1 pale teal bag, 4 vibrant purple bags, 3 plaid brown bags.
drab yellow bags contain 5 faded black bags, 1 plaid green bag, 1 mirrored plum bag.
faded magenta bags contain 4 vibrant indigo bags, 2 shiny gold bags, 2 mirrored lavender bags.
muted yellow bags contain 4 light turquoise bags, 2 shiny lime bags, 2 striped white bags, 3 dark silver bags.
posh brown bags contain 3 dull cyan bags.
pale tomato bags contain 1 mirrored fuchsia bag.
dark aqua bags contain 4 dull blue bags, 5 mirrored white bags.
muted blue bags contain 3 mirrored fuchsia bags.
light silver bags contain no other bags.
muted coral bags contain 1 pale plum bag, 2 wavy crimson bags, 5 posh magenta bags, 4 vibrant brown bags.
muted green bags contain 4 shiny gray bags, 4 pale crimson bags, 4 striped yellow bags, 1 bright salmon bag.
muted brown bags contain 2 dark lavender bags, 2 dim chartreuse bags.
dim violet bags contain 4 faded tan bags, 3 dull violet bags, 1 light yellow bag.
clear fuchsia bags contain 2 drab plum bags.
muted violet bags contain 3 muted salmon bags, 1 clear tomato bag, 1 dark red bag.
posh violet bags contain 5 dull chartreuse bags, 2 light coral bags, 5 mirrored cyan bags.
dark violet bags contain 1 vibrant bronze bag, 4 bright red bags, 3 striped gold bags.
dotted fuchsia bags contain 2 vibrant tan bags, 5 striped crimson bags, 3 wavy silver bags.
vibrant indigo bags contain 3 bright fuchsia bags, 2 muted gold bags, 1 bright red bag, 3 bright aqua bags.
vibrant gray bags contain 3 vibrant yellow bags, 2 clear teal bags.
dotted plum bags contain 5 dull crimson bags, 2 posh green bags, 2 light gray bags, 2 pale tomato bags.
vibrant magenta bags contain 4 dotted beige bags.
drab maroon bags contain 1 drab coral bag, 1 dotted tan bag, 1 dull cyan bag.
dotted gold bags contain 1 wavy yellow bag, 4 dark olive bags.
striped cyan bags contain 4 shiny gold bags, 5 striped crimson bags, 5 striped red bags.
pale silver bags contain 5 vibrant red bags, 4 clear red bags.
drab coral bags contain 4 striped gold bags, 5 striped silver bags, 4 mirrored turquoise bags, 5 striped turquoise bags.
vibrant chartreuse bags contain 5 striped gray bags, 1 bright turquoise bag, 1 shiny silver bag.
pale maroon bags contain 5 vibrant bronze bags, 4 bright tan bags, 2 clear gray bags, 4 light turquoise bags.
wavy blue bags contain 4 wavy yellow bags.
mirrored green bags contain 4 dark red bags, 1 striped white bag, 3 faded beige bags, 5 wavy red bags.
shiny purple bags contain 1 clear blue bag, 4 striped chartreuse bags, 5 dark maroon bags.
dim white bags contain 3 striped gold bags, 4 striped beige bags, 2 muted blue bags, 4 muted white bags.
posh maroon bags contain 2 dotted red bags, 5 dotted crimson bags.
posh chartreuse bags contain 4 shiny turquoise bags, 5 posh gray bags, 2 mirrored blue bags, 5 light maroon bags.
dim orange bags contain 1 faded beige bag.
clear gray bags contain 1 bright red bag, 2 dull cyan bags, 3 bright maroon bags, 3 muted gold bags.
dull purple bags contain 4 muted gold bags, 2 faded beige bags.
muted olive bags contain 4 clear blue bags, 1 posh lavender bag, 1 posh brown bag, 2 striped chartreuse bags.
pale lavender bags contain 1 dull gray bag, 3 posh silver bags, 3 dark aqua bags.
shiny blue bags contain 5 bright tan bags, 4 faded yellow bags.
plaid salmon bags contain 3 shiny teal bags.
mirrored silver bags contain 4 plaid tomato bags, 5 dotted salmon bags.
light blue bags contain 3 pale tan bags, 2 mirrored fuchsia bags, 4 drab maroon bags, 1 posh silver bag.
light orange bags contain 2 dark gold bags, 1 dim gold bag.
faded tomato bags contain 2 wavy beige bags.
shiny lime bags contain no other bags.
shiny fuchsia bags contain 5 muted orange bags, 2 shiny plum bags, 1 plaid turquoise bag.
light indigo bags contain 2 dim purple bags, 4 faded magenta bags, 3 dim black bags.
faded aqua bags contain 2 drab beige bags, 3 bright aqua bags, 3 drab plum bags, 2 dotted silver bags.
posh blue bags contain 1 wavy magenta bag, 5 posh magenta bags.
dotted crimson bags contain 3 striped gold bags, 3 dark yellow bags.
striped salmon bags contain 1 dark tomato bag, 5 shiny coral bags, 5 plaid silver bags.
clear brown bags contain 2 muted olive bags, 5 plaid gold bags.
clear orange bags contain 5 posh plum bags, 1 posh lavender bag, 3 dull cyan bags.
shiny teal bags contain 4 muted gold bags, 3 striped chartreuse bags.
dim bronze bags contain 4 dull lavender bags.
shiny silver bags contain 3 dull plum bags, 5 vibrant indigo bags, 4 striped bronze bags, 4 posh tomato bags.
dim tomato bags contain 5 wavy indigo bags, 3 wavy gold bags, 5 dim beige bags.
vibrant white bags contain 5 dim magenta bags, 2 posh silver bags, 5 dull maroon bags.
dark blue bags contain 4 striped green bags, 4 dotted violet bags, 4 bright red bags.
plaid gray bags contain 4 faded gray bags, 3 dark brown bags.
mirrored indigo bags contain 3 dim crimson bags.
mirrored cyan bags contain 5 faded teal bags, 4 striped tan bags, 3 bright fuchsia bags, 3 striped bronze bags.
dotted red bags contain 5 muted olive bags, 1 posh lavender bag, 2 faded maroon bags, 3 bright tomato bags.
clear crimson bags contain 4 muted aqua bags, 2 dark lavender bags.
mirrored brown bags contain 3 drab beige bags, 5 striped lavender bags, 4 dark red bags, 4 faded brown bags.
pale gray bags contain 4 vibrant brown bags, 5 dark chartreuse bags, 3 vibrant gold bags, 2 striped tan bags.
bright gray bags contain 2 dull chartreuse bags, 1 dull purple bag, 3 dotted violet bags.
dotted purple bags contain 5 shiny silver bags, 2 mirrored white bags, 3 shiny indigo bags.
dotted indigo bags contain 3 bright gray bags, 2 light tomato bags, 4 dim violet bags, 3 dull chartreuse bags.
wavy orange bags contain 4 muted maroon bags, 5 clear salmon bags, 5 dark orange bags.
dark plum bags contain 2 muted tomato bags, 3 shiny gold bags, 4 striped chartreuse bags.
vibrant yellow bags contain 5 dark red bags, 4 shiny gold bags, 3 light silver bags, 2 faded yellow bags.
vibrant bronze bags contain 5 clear blue bags.
striped silver bags contain 4 faded cyan bags, 5 posh fuchsia bags.
dull yellow bags contain 4 shiny silver bags, 2 posh maroon bags, 1 mirrored lavender bag, 2 dull lavender bags.
wavy turquoise bags contain 4 muted gold bags.
drab salmon bags contain 4 dotted yellow bags, 4 posh aqua bags, 1 dull beige bag.
posh green bags contain 5 mirrored lavender bags, 5 dim maroon bags, 2 faded gray bags, 1 wavy lavender bag.
muted gold bags contain no other bags.
mirrored aqua bags contain 4 posh olive bags, 5 shiny bronze bags, 4 drab blue bags.
wavy tan bags contain 2 wavy green bags, 5 faded brown bags.
mirrored magenta bags contain 1 plaid black bag, 1 clear violet bag.
mirrored lime bags contain 1 clear cyan bag, 3 pale maroon bags, 5 striped teal bags.
dark crimson bags contain 2 vibrant black bags, 4 clear violet bags, 2 vibrant indigo bags.
striped blue bags contain 4 vibrant cyan bags, 3 striped chartreuse bags, 4 bright tan bags, 2 dull lime bags.
wavy chartreuse bags contain 4 dotted silver bags, 3 drab red bags, 5 posh olive bags.
clear magenta bags contain 3 clear orange bags, 1 plaid plum bag.
dim beige bags contain 3 vibrant maroon bags, 2 shiny silver bags, 4 faded lavender bags.
striped tan bags contain 5 mirrored olive bags, 4 dark maroon bags.
faded green bags contain 1 posh white bag, 1 dotted crimson bag.
drab teal bags contain 4 bright fuchsia bags.
posh lavender bags contain 3 bright red bags, 2 shiny lime bags, 2 bright chartreuse bags.
bright tan bags contain 5 clear blue bags, 2 dark red bags, 3 bright maroon bags.
light red bags contain 5 mirrored plum bags, 3 vibrant black bags, 5 vibrant gray bags.
light white bags contain 2 drab beige bags.
faded gray bags contain 5 dim plum bags, 1 bright aqua bag.
light gray bags contain 3 dark plum bags, 2 vibrant silver bags, 1 faded gold bag.
light teal bags contain 5 dark lavender bags.
muted teal bags contain 4 striped chartreuse bags, 2 muted gold bags, 1 mirrored green bag, 5 dull orange bags.
dull chartreuse bags contain 5 wavy maroon bags, 5 posh black bags, 1 shiny purple bag, 2 bright tan bags.
vibrant salmon bags contain 3 faded beige bags, 1 faded magenta bag.
mirrored gold bags contain 2 dark orange bags.
dark yellow bags contain 1 plaid brown bag, 3 dull lime bags, 4 shiny gold bags, 4 drab beige bags.
plaid crimson bags contain 4 pale chartreuse bags, 3 vibrant indigo bags.
shiny gold bags contain 1 muted olive bag, 5 dotted red bags, 1 drab plum bag.
pale olive bags contain 4 dark maroon bags, 1 clear red bag.
dotted magenta bags contain 2 dark purple bags.
striped violet bags contain 5 plaid salmon bags, 4 mirrored cyan bags, 2 faded crimson bags, 3 mirrored fuchsia bags.
faded lime bags contain 2 vibrant brown bags, 1 dim purple bag.
muted magenta bags contain 4 wavy tomato bags, 2 plaid black bags, 5 mirrored olive bags, 2 muted turquoise bags.
dim lime bags contain 1 wavy beige bag, 2 light olive bags.
plaid cyan bags contain 3 muted yellow bags.
dotted maroon bags contain 3 vibrant green bags, 2 light purple bags.
striped gray bags contain 3 plaid tomato bags.
light violet bags contain 2 striped tomato bags, 1 mirrored beige bag, 4 clear magenta bags, 3 muted red bags.
vibrant gold bags contain 2 striped blue bags, 4 dull orange bags, 2 striped fuchsia bags.
vibrant lavender bags contain 2 bright red bags, 3 dull chartreuse bags.
clear yellow bags contain 2 clear orange bags.
muted black bags contain 2 wavy beige bags, 3 light magenta bags, 5 plaid chartreuse bags.
pale brown bags contain 5 wavy red bags, 4 vibrant red bags.
plaid purple bags contain 4 dotted violet bags, 1 muted white bag.
vibrant fuchsia bags contain 3 mirrored silver bags.
light purple bags contain 3 light green bags, 4 wavy lime bags, 5 striped chartreuse bags, 4 shiny blue bags.
mirrored white bags contain 4 bright brown bags, 2 striped silver bags.
dull silver bags contain 5 shiny gray bags.
dark magenta bags contain 1 light turquoise bag, 4 plaid brown bags.
faded red bags contain 2 striped tan bags.
mirrored beige bags contain 4 clear yellow bags, 3 mirrored orange bags, 1 posh lavender bag.
faded coral bags contain 1 striped blue bag, 2 shiny purple bags, 5 muted purple bags.
shiny cyan bags contain 3 clear purple bags, 2 dim orange bags, 1 dark teal bag, 4 mirrored chartreuse bags.
posh gray bags contain 3 bright red bags, 3 faded maroon bags.
dim cyan bags contain 5 light white bags.
dotted tomato bags contain 5 plaid lime bags, 4 shiny plum bags, 1 wavy blue bag.
dark teal bags contain 4 shiny turquoise bags, 5 faded green bags.
muted cyan bags contain 2 bright maroon bags, 1 posh coral bag, 3 light bronze bags, 1 dim tomato bag.
dotted yellow bags contain 3 bright maroon bags, 4 dim lime bags, 3 faded aqua bags, 2 plaid magenta bags.
dark cyan bags contain 4 faded beige bags.
dark bronze bags contain 1 pale white bag, 4 shiny chartreuse bags, 1 vibrant cyan bag, 1 muted yellow bag.
drab cyan bags contain 5 clear blue bags, 4 bright tan bags, 5 wavy red bags.
drab white bags contain 5 shiny yellow bags.
bright cyan bags contain 3 bright brown bags, 2 clear gold bags, 4 striped white bags, 3 dark yellow bags.
dull lavender bags contain 4 mirrored brown bags, 4 pale salmon bags.
shiny olive bags contain 1 plaid beige bag.
posh fuchsia bags contain 5 posh gray bags.
plaid aqua bags contain 4 faded turquoise bags, 4 striped silver bags, 4 shiny beige bags, 3 dark cyan bags.
shiny plum bags contain 3 dull tomato bags.
striped chartreuse bags contain 4 posh black bags, 1 vibrant cyan bag, 2 bright chartreuse bags.
pale red bags contain 2 vibrant bronze bags, 3 posh black bags, 4 bright tomato bags.
plaid maroon bags contain 2 dotted coral bags, 4 wavy tomato bags, 3 pale blue bags.
shiny beige bags contain 4 faded aqua bags.
plaid silver bags contain 2 light gold bags, 2 wavy green bags, 4 posh cyan bags.
light cyan bags contain 5 shiny tomato bags, 1 wavy magenta bag.
faded silver bags contain 4 striped bronze bags, 3 pale coral bags, 2 dim salmon bags.
light green bags contain 5 vibrant maroon bags, 3 muted indigo bags.
faded maroon bags contain 5 dull lime bags, 1 plaid black bag, 5 drab beige bags, 5 clear gray bags.
posh tan bags contain 3 dim violet bags, 2 plaid turquoise bags, 4 pale turquoise bags, 1 dim chartreuse bag.
muted silver bags contain 3 muted brown bags, 2 dotted crimson bags.
mirrored turquoise bags contain 4 bright cyan bags, 1 light turquoise bag, 4 dark silver bags, 3 light coral bags.
clear coral bags contain 2 clear gray bags, 3 posh plum bags, 4 muted indigo bags, 3 pale chartreuse bags.
clear teal bags contain 2 light turquoise bags, 1 striped white bag.
muted lavender bags contain 5 posh brown bags, 3 striped blue bags, 3 clear blue bags.
shiny tan bags contain 1 light olive bag.
dark salmon bags contain 2 dull teal bags, 1 muted aqua bag, 5 dark crimson bags.
plaid orange bags contain 3 dull plum bags, 5 dim maroon bags, 2 faded maroon bags.
clear black bags contain 5 shiny beige bags, 1 plaid tomato bag, 2 dull magenta bags.
bright red bags contain no other bags.
striped tomato bags contain 5 posh lavender bags, 2 dark teal bags, 2 drab bronze bags, 2 drab chartreuse bags.
light maroon bags contain 1 faded magenta bag, 4 mirrored chartreuse bags.
dark indigo bags contain 5 striped purple bags, 1 clear tomato bag, 4 light beige bags.
faded violet bags contain 1 striped tan bag.
clear violet bags contain 1 plaid tan bag, 2 light salmon bags.
dotted violet bags contain 4 light silver bags.
dotted brown bags contain 3 dim gold bags, 3 drab chartreuse bags.
wavy gray bags contain 2 drab tan bags.
faded black bags contain 1 faded aqua bag, 3 bright gray bags.
shiny bronze bags contain 4 muted salmon bags, 5 plaid lime bags, 1 faded maroon bag, 3 mirrored silver bags.
faded purple bags contain 3 wavy beige bags, 5 shiny silver bags.
dim plum bags contain 5 light salmon bags, 4 plaid plum bags, 2 posh crimson bags.
plaid turquoise bags contain 1 bright purple bag, 5 muted tomato bags.
clear tomato bags contain 2 striped bronze bags.
bright green bags contain 3 plaid chartreuse bags, 5 dim orange bags, 4 dull magenta bags.
drab tomato bags contain 5 wavy tomato bags, 5 posh gold bags.
clear indigo bags contain 1 posh white bag, 5 drab plum bags.
bright crimson bags contain 4 faded salmon bags.
dark coral bags contain 3 clear indigo bags, 5 dull cyan bags, 5 faded teal bags.
light salmon bags contain 2 muted salmon bags, 3 posh brown bags.
dark purple bags contain 2 shiny chartreuse bags, 5 clear cyan bags, 4 striped fuchsia bags, 5 light silver bags.
dotted beige bags contain 5 muted olive bags, 2 vibrant cyan bags, 4 light turquoise bags.
muted crimson bags contain 5 drab plum bags.
wavy gold bags contain 5 faded red bags, 4 bright purple bags, 3 drab plum bags, 4 dotted red bags.
faded crimson bags contain 5 bright maroon bags.
shiny chartreuse bags contain 5 posh black bags, 1 clear blue bag.
dull magenta bags contain 5 vibrant beige bags, 2 dull chartreuse bags.
shiny turquoise bags contain 4 faded teal bags.
drab aqua bags contain 1 muted white bag, 1 wavy beige bag, 5 bright cyan bags.
dim teal bags contain 5 vibrant silver bags.
light yellow bags contain 3 dull lime bags, 1 dotted red bag, 3 pale turquoise bags, 4 clear gold bags.
striped olive bags contain 1 clear teal bag, 5 dim violet bags.
dark green bags contain 1 posh black bag, 3 striped fuchsia bags.
light black bags contain 2 clear beige bags, 5 mirrored beige bags, 2 pale blue bags.
dull brown bags contain 4 posh tomato bags, 2 faded beige bags, 4 bright violet bags.
shiny green bags contain 4 wavy tomato bags, 1 faded teal bag, 3 muted maroon bags, 2 striped crimson bags.
shiny salmon bags contain 1 clear gray bag, 3 light gold bags, 2 mirrored green bags.
clear aqua bags contain 5 striped chartreuse bags, 1 light tomato bag, 1 pale bronze bag.
wavy beige bags contain 4 muted salmon bags, 1 dark bronze bag, 4 plaid yellow bags.
plaid yellow bags contain 5 mirrored cyan bags, 1 vibrant violet bag, 3 vibrant coral bags, 5 dim cyan bags.
clear beige bags contain 5 bright red bags.
clear lime bags contain 2 vibrant coral bags, 5 dark lavender bags, 2 pale teal bags.
vibrant beige bags contain 1 bright tomato bag, 2 drab red bags, 4 mirrored cyan bags.
bright yellow bags contain 1 pale beige bag, 3 dim lime bags, 5 posh white bags.
plaid plum bags contain 1 light salmon bag, 5 faded yellow bags, 2 shiny brown bags.
plaid green bags contain 3 posh plum bags, 5 mirrored violet bags, 5 light lavender bags, 4 plaid plum bags.
dull tan bags contain 1 drab white bag, 1 vibrant bronze bag, 3 dotted crimson bags.
clear bronze bags contain 3 clear gray bags, 1 dim beige bag.
vibrant crimson bags contain 4 shiny plum bags, 4 vibrant orange bags.
vibrant orange bags contain 2 bright tomato bags, 3 shiny indigo bags, 2 dotted turquoise bags, 4 striped tan bags.
plaid beige bags contain 2 light white bags.
dull indigo bags contain 1 faded salmon bag, 3 vibrant cyan bags.
muted white bags contain 4 striped fuchsia bags.
shiny aqua bags contain 1 shiny teal bag, 4 wavy cyan bags, 2 dark green bags, 4 bright aqua bags.
bright fuchsia bags contain 3 shiny chartreuse bags, 5 vibrant bronze bags.
dull bronze bags contain 5 drab fuchsia bags, 3 pale beige bags, 2 posh lavender bags.
muted maroon bags contain 2 posh fuchsia bags, 1 drab plum bag, 1 shiny orange bag.
striped fuchsia bags contain 4 posh lavender bags, 5 dull cyan bags, 2 posh black bags, 2 vibrant bronze bags.
shiny tomato bags contain 5 pale violet bags.
wavy lime bags contain 5 bright red bags, 2 bright brown bags, 1 dark olive bag.
wavy tomato bags contain 1 drab tan bag, 1 bright maroon bag, 3 mirrored fuchsia bags.
striped coral bags contain 2 pale plum bags, 5 muted maroon bags.
clear silver bags contain 2 striped turquoise bags.
vibrant tomato bags contain 4 drab lime bags, 3 dim coral bags, 3 mirrored tan bags.
faded gold bags contain 4 dull black bags.
striped bronze bags contain 5 dark red bags, 2 light lavender bags, 5 muted olive bags, 4 posh gray bags.
dotted chartreuse bags contain 2 dull brown bags, 4 dim red bags, 3 drab beige bags.
vibrant coral bags contain 3 shiny turquoise bags, 1 striped orange bag.
faded lavender bags contain 5 shiny lime bags.
dull turquoise bags contain 2 dark olive bags, 3 dark coral bags, 3 shiny purple bags, 3 clear turquoise bags.
shiny yellow bags contain 4 dim gold bags, 4 vibrant silver bags, 1 dark yellow bag.
plaid lavender bags contain 4 vibrant violet bags, 3 striped silver bags, 2 muted crimson bags, 1 light tan bag.
mirrored fuchsia bags contain 3 clear gray bags.
wavy white bags contain 3 dim turquoise bags.
clear purple bags contain 1 shiny chartreuse bag.
dark chartreuse bags contain 1 dim blue bag, 2 dark maroon bags, 1 light lavender bag, 1 drab black bag.
wavy purple bags contain 2 vibrant brown bags, 3 faded olive bags, 5 dim gold bags, 1 dull brown bag.
bright lavender bags contain 1 muted white bag.
shiny red bags contain 4 muted aqua bags, 5 striped teal bags, 1 dark violet bag.
pale aqua bags contain 3 dark teal bags, 3 dull violet bags.
wavy brown bags contain 4 posh brown bags, 3 posh crimson bags, 4 mirrored lavender bags.
clear chartreuse bags contain 2 bright tan bags.
mirrored chartreuse bags contain 5 plaid black bags, 3 dark turquoise bags, 2 posh maroon bags, 4 striped silver bags.
pale turquoise bags contain 2 dark red bags, 3 plaid white bags, 5 faded tomato bags, 4 dim coral bags.
dotted blue bags contain 4 bright lavender bags.
bright plum bags contain 5 plaid salmon bags, 1 dark purple bag, 2 muted violet bags, 3 dark olive bags.
pale black bags contain 1 dark plum bag.
dotted coral bags contain 4 muted magenta bags, 2 faded magenta bags, 1 clear brown bag.
plaid magenta bags contain 2 light green bags, 2 vibrant coral bags, 2 faded beige bags, 1 dim teal bag.
striped lavender bags contain 4 clear gray bags, 3 muted teal bags, 5 drab beige bags, 1 striped bronze bag.
striped magenta bags contain 3 dull fuchsia bags, 2 posh olive bags, 5 shiny coral bags, 1 dull tan bag.
pale tan bags contain 1 pale olive bag, 4 mirrored teal bags.
light crimson bags contain 4 dull purple bags.
pale coral bags contain 4 dotted red bags, 1 plaid salmon bag.
vibrant blue bags contain 5 shiny yellow bags, 2 drab silver bags, 1 faded black bag, 1 faded lime bag.
dark tan bags contain 1 shiny brown bag, 4 dark green bags, 3 drab blue bags, 4 drab tan bags.
drab olive bags contain 5 vibrant yellow bags.
wavy violet bags contain 5 shiny coral bags.
plaid gold bags contain 1 pale salmon bag, 4 plaid beige bags.
plaid bronze bags contain 5 bright blue bags, 1 wavy green bag, 3 clear magenta bags.
wavy cyan bags contain 2 clear red bags, 5 clear indigo bags.
vibrant black bags contain 2 mirrored green bags.
faded white bags contain 4 light green bags, 4 vibrant teal bags, 5 wavy black bags.
mirrored orange bags contain 4 muted tomato bags.
dark gold bags contain 1 muted turquoise bag, 4 mirrored olive bags, 2 dim maroon bags, 1 posh olive bag.
muted turquoise bags contain 1 plaid tomato bag.
dull blue bags contain 1 dotted silver bag, 2 vibrant beige bags, 3 muted salmon bags, 2 faded teal bags.
light tomato bags contain 4 dark maroon bags, 2 pale red bags, 4 dark red bags.
striped turquoise bags contain 5 dull cyan bags, 4 bright violet bags, 2 faded violet bags, 5 posh silver bags.
wavy magenta bags contain 1 muted indigo bag, 5 bright brown bags, 5 striped tan bags.
posh bronze bags contain 1 striped fuchsia bag, 5 dotted salmon bags, 3 striped bronze bags.
drab silver bags contain 2 plaid white bags, 2 plaid lime bags.
bright maroon bags contain no other bags.
dull red bags contain 5 wavy blue bags, 3 light green bags, 4 mirrored plum bags, 3 mirrored purple bags.
pale gold bags contain 3 drab plum bags, 5 light salmon bags.
wavy red bags contain 4 light lavender bags, 5 drab beige bags.
mirrored gray bags contain 3 drab white bags, 1 posh brown bag.
drab plum bags contain 5 vibrant bronze bags, 1 muted olive bag, 1 striped tan bag.
mirrored teal bags contain 5 plaid brown bags, 3 plaid salmon bags.
dotted tan bags contain 3 drab lavender bags, 1 dark bronze bag, 5 vibrant indigo bags, 1 muted purple bag.
dark gray bags contain 5 vibrant yellow bags, 4 posh lavender bags, 1 drab olive bag, 1 dark lavender bag.
pale indigo bags contain 4 mirrored silver bags.
bright white bags contain 4 clear magenta bags.
clear white bags contain 4 faded olive bags.
faded tan bags contain 1 wavy tomato bag, 3 bright cyan bags, 4 drab beige bags, 3 striped turquoise bags.
striped lime bags contain 3 dim lime bags, 1 light orange bag.
dim blue bags contain 3 bright maroon bags.
mirrored tomato bags contain 3 plaid silver bags.
wavy coral bags contain 4 wavy yellow bags, 4 faded white bags.
dark silver bags contain 4 clear cyan bags, 3 vibrant yellow bags, 2 posh gray bags, 2 shiny gold bags.
dim fuchsia bags contain 3 plaid orange bags, 2 wavy chartreuse bags, 3 pale chartreuse bags.
light lime bags contain 2 striped brown bags, 3 muted red bags, 1 posh crimson bag, 5 bright green bags.
mirrored red bags contain 4 wavy beige bags, 5 dim turquoise bags.
light chartreuse bags contain 4 wavy yellow bags, 2 light yellow bags.
dull teal bags contain 4 dotted gold bags, 4 faded maroon bags.
dull aqua bags contain 4 dull purple bags, 2 light lavender bags.
pale white bags contain 3 pale maroon bags.
wavy salmon bags contain 4 posh brown bags, 1 light brown bag, 5 light orange bags, 3 dotted olive bags.
faded chartreuse bags contain 4 bright tan bags, 4 mirrored silver bags, 4 dotted maroon bags, 5 dark beige bags.
posh beige bags contain 4 dim teal bags.
posh crimson bags contain 5 dark silver bags, 4 vibrant yellow bags, 1 posh gray bag.
shiny orange bags contain 3 vibrant cyan bags, 1 wavy red bag, 3 bright chartreuse bags, 2 striped tan bags.
wavy lavender bags contain 1 dim gold bag, 4 clear blue bags, 1 plaid crimson bag, 3 faded magenta bags.
vibrant aqua bags contain 1 muted black bag, 5 pale lavender bags, 3 dim cyan bags.
dim magenta bags contain 2 dark salmon bags, 1 dark orange bag.
wavy olive bags contain 3 shiny olive bags, 2 bright silver bags.
dull green bags contain 3 drab red bags, 4 muted turquoise bags, 3 plaid brown bags, 4 mirrored olive bags.
dotted gray bags contain 5 vibrant olive bags, 4 drab fuchsia bags.
mirrored salmon bags contain 5 faded indigo bags, 5 vibrant indigo bags.
faded orange bags contain 5 striped brown bags, 5 muted violet bags.
plaid black bags contain 5 dark green bags, 4 bright fuchsia bags, 2 shiny lime bags.
dull coral bags contain 1 bright tan bag, 4 muted salmon bags, 1 bright gray bag.
pale chartreuse bags contain 4 faded crimson bags, 4 dotted gold bags, 4 posh crimson bags.
mirrored black bags contain 3 light white bags, 1 muted magenta bag, 1 mirrored turquoise bag, 4 bright plum bags.
drab crimson bags contain 1 light tan bag, 3 dull green bags, 1 wavy blue bag.
muted orange bags contain 5 dull fuchsia bags.
pale orange bags contain 4 vibrant gray bags.
clear salmon bags contain 3 clear aqua bags.
dull tomato bags contain 2 light maroon bags, 2 muted lavender bags, 1 muted red bag, 1 faded brown bag.
pale crimson bags contain 5 mirrored chartreuse bags.
dotted white bags contain 2 posh brown bags.
posh teal bags contain 4 dotted salmon bags, 1 dark violet bag.
dim coral bags contain 2 striped white bags.
bright aqua bags contain 4 bright red bags, 5 bright tan bags, 5 dotted violet bags.
dark beige bags contain 2 dull aqua bags, 2 drab blue bags.
bright teal bags contain 5 drab white bags.
dotted silver bags contain 3 dull orange bags.
striped maroon bags contain 4 drab violet bags, 2 light black bags, 4 light lavender bags.
pale magenta bags contain 4 pale gray bags.
shiny maroon bags contain 2 vibrant beige bags, 2 drab lime bags, 4 vibrant turquoise bags, 2 dull chartreuse bags.
dark black bags contain 1 dark white bag, 1 wavy crimson bag, 3 plaid tan bags, 5 striped red bags.
posh white bags contain 5 vibrant gold bags.
muted aqua bags contain 5 vibrant gray bags, 4 dull chartreuse bags, 3 bright plum bags, 1 dark orange bag.
pale cyan bags contain 3 muted white bags, 1 dark olive bag.
plaid white bags contain 4 plaid black bags, 4 light white bags, 3 plaid salmon bags.
bright beige bags contain 3 posh magenta bags, 2 clear yellow bags, 1 faded plum bag.
dotted black bags contain 1 muted olive bag.
bright purple bags contain 4 mirrored cyan bags, 1 faded violet bag, 1 dark olive bag.
faded plum bags contain 5 mirrored olive bags, 4 light silver bags.
dull gold bags contain 5 light yellow bags, 4 pale gold bags, 2 dotted orange bags.
dark tomato bags contain 4 muted gold bags, 3 shiny gold bags, 3 bright red bags.
pale yellow bags contain 4 drab plum bags, 1 clear teal bag, 4 faded purple bags, 2 posh bronze bags.
vibrant turquoise bags contain 3 dim violet bags, 2 muted silver bags, 3 plaid cyan bags, 3 faded aqua bags.
mirrored coral bags contain 2 posh aqua bags, 4 bright violet bags, 2 dark salmon bags.
muted salmon bags contain 1 vibrant indigo bag.
pale plum bags contain 5 mirrored teal bags, 1 drab tan bag, 3 plaid crimson bags.
clear gold bags contain 3 dull cyan bags, 3 plaid brown bags, 1 muted tomato bag.
muted chartreuse bags contain 4 posh gray bags, 5 drab purple bags.
light coral bags contain 4 clear purple bags, 5 drab beige bags.
faded indigo bags contain 1 dull brown bag.
bright turquoise bags contain 5 drab bronze bags.
clear plum bags contain 3 dark red bags, 3 dim gold bags, 2 posh black bags, 5 plaid beige bags.
plaid chartreuse bags contain 1 wavy yellow bag, 3 mirrored olive bags.
faded bronze bags contain 2 light salmon bags.
bright lime bags contain 3 faded teal bags, 5 dotted coral bags, 1 faded crimson bag.
drab violet bags contain 1 faded beige bag, 2 mirrored chartreuse bags, 2 clear orange bags, 4 dotted beige bags.
dull olive bags contain 5 muted lime bags, 3 dark yellow bags.
wavy indigo bags contain 1 clear tan bag, 5 vibrant green bags.
posh indigo bags contain 5 drab salmon bags.
dull cyan bags contain no other bags.
plaid brown bags contain 5 striped tan bags, 2 dark maroon bags, 4 dim chartreuse bags, 3 dull lime bags.
mirrored purple bags contain 5 drab green bags, 2 clear green bags.
striped plum bags contain 5 dim white bags, 4 dark teal bags.
dim lavender bags contain 5 striped bronze bags, 3 wavy maroon bags.
dim chartreuse bags contain 3 shiny gold bags, 2 mirrored olive bags.`
    .split('\n')
    .map((row) => {
        let [bag, contents] = row.split(' contain ')

        bag = bag.replaceAll('bags', 'bag')

        let cleanContents;

        if(contents === 'no other bags.') {
            cleanContents = [];
        } else {
            cleanContents = contents
                .replaceAll('.', '')
                .replaceAll('bags', 'bag')
                .split(', ')
        }

        return new Bag(bag, cleanContents)
    })
