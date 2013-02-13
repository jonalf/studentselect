#!/usr/bin/python
import json
import cgi

studentList = "classlist.txt"

def getStudents( sl ):
    names = []
    f = open(sl, "r")
    for n in f.readlines():
        names.append( n.strip() )
    f.close()
    return names

def loadClass( sl ):
    return json.dumps(getStudents( sl ))


form = cgi.FieldStorage()
return loadClass( "classlist.txt" )
