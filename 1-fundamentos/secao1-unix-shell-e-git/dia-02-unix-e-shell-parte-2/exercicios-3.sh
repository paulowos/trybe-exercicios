#1
ps
#

#2
sleep 30 &
#

#3
ps | grep sleep
kill 8232
#

#4
sleep 30
##ctrl + z
bg
#

#5
sleep 300 &
#

#6
sleep 200
##ctrl + z
bg
sleep 100
##ctrl + z
bg
#

#7
jobs
fg %1
##ctrl + z
jobs
#

#8
jobs
bg %3
jobs
#

#9
killall sleep
#