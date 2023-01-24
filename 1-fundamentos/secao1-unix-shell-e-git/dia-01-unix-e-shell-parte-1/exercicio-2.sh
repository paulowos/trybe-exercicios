#1
mkdir unix_tests_search
cd unix_tests_search
#

#2
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
#

#3
cat countries.txt
#

#4
less countries.txt
#

#5
more countries.txt
/Zambia
#

#6
grep Brazil countries.txt
#

#7
grep -i brazil countries.txt
#

#8
touch phrases.txt
#

#9
grep -v fox phrases.txt
#

#10
wc -w phrases.txt
#

#11
wc -l phrases.txt
#

#12
touch empty.tbt empty.pdf
#

#13 
ls unix_tests_search
#

#14
ls *txt
#

#15
ls *t?t
#

#16
man ls
#