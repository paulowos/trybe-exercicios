#1
mkdir unix-tests
cd unix-tests   
#

#2
touch trybe.txt
#

#3
cp trybe.txt trybe_backup.txt
#

#4
mv trybe.txt trybe2.txt
#

#5
mkdir backup
#

#6
mv trybe_backup.txt backup/
#

#7
mkdir backup2
#

#8
mv backup/trybe_backup.txt backup2/
#

#9
rmdir backup
#

#10
mv backup2 backup
#

#11
pwd
ls -l
#

#12
rm -fr backup/
#

#13 
clear
#

#15
head -5 skills.txt
#

#16
tail -5 skills.txt
#

#17
rm *.txt
#