const {ordinalSuffix} = require('@blueberry_muffins/ordinal_suffix')

for (i = 1; i <= 100; i++) {
    console.log(ordinalSuffix(i))
}