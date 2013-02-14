#!/usr/bin/python
import json
import cgi

studentList = "classlist.txt"

def getData( sl ):
    names = []
    f = open(sl, "r")
    for n in f.readlines():
        names.append( n.strip() )
    f.close()
    return names

def loadData( sl ):
    return json.dumps(getData( sl ))


form = cgi.FieldStorage()
t = form["type"].value
print "\n\n"
if t == "students":
    print loadData( "classlist.txt" )
elif t == "classes":
    print loadData( "classnames" )
