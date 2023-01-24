#1
mkdir unix_tests_skills
cd unix_tests_skills
#

#2
cat > skills2.txt
#

#3
cat >> skills2.txt
sort < skills2
#

#4
wc -l skills2.txt
#

#5
sort < skills2.txt | head -3 > top_skills.txt
#

#6
cat > phrases2.txt
#

#7
grep -i *br* phrases2.txt | wc -l
#

#8
grep -v *br* phrases2.txt | wc -l
#

#9
cat >> phrases2.txt
#

#10
cat countries.txt > bunch_of_things.txt
cat phrases2.txt >> bunch_of_things.txt
#

#11
sort bunch_of_things.txt -o bunch_of_things.txt
#