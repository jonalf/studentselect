#!/usr/bin/python
import json
import cgi

studentList = "classlist.txt"

def getDataCSV():
    classDict = {}
    f = open( studentList, "r" )
    for line in f.readlines():
        clas = line.split(",")
        classDict[ clas[0] ] = clas[1:]
    f.close()
    return classDict

form = cgi.FieldStorage()
t = form["type"].value
classDict = getDataCSV()

print "\n\n"
if t == "classes":
    print json.dumps( classDict.keys() )

elif t == "students":
    if form.has_key("section"):
        print json.dumps( classDict[form["section"].value])
    else:
        print json.dumps( classDict[ classDict.keys()[0]] )

