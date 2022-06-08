
leader='/Users/stefan/Desktop/Code/stheller.com/dynamic_code/'
file=open(leader+'about.txt','r')
lines=file.readlines()

writeme='</th></tr><tr><td><hr/></td></tr>'

for l,line in enumerate(lines):
    if '\n' or '\r' in line:
        lines[l]='<tr><td>'+line+'</td></tr>'
        writeme=writeme+lines[l]

writeme= writeme+ '</td></tr>'

with open("/Users/stefan/Desktop/Code/stheller.com/current_code/index_test.html",'r') as f_old, open('/Users/stefan/Desktop/Code/stheller.com/current_code/index_test2.html', "w") as f_new:
    for line in f_old:
        f_new.write(line)
        if 'about me' in line:
            f_new.write(writeme)
