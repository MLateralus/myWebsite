
var Produkty = [
	{"produkt":"TWTREN-034A-1","nazwaSurowca":"ULTRAMID NATURALNY","dostawca":"ALBIS","moq":700,"cena":3.55,"lead":90},
	{"produkt":"TWTREN-034A-1","nazwaSurowca":"ULTRAMID NATURALNY","dostawca":"ALCOMEX","moq":1000,"cena":5.7,"lead":10},
	{"produkt":"TWTREN-034A-1","nazwaSurowca":"ULTRAMID NATURALNY","dostawca":"HILTI KUNSTSTOFF","moq":400,"cena":3.75,"lead":60},
	{"produkt":"TWTREN-034A-1","nazwaSurowca":"ULTRAMID NATURALNY","dostawca":"RESINEX","moq":100,"cena":4.87,"lead":30},
	{"produkt":"TWTREB-016C-1","nazwaSurowca":"DURE THAN","dostawca":"ALBIS","moq":1000,"cena":1.02,"lead":60},
	{"produkt":"TWTREB-016C-1","nazwaSurowca":"DURE THAN","dostawca":"ALCOMEX","moq":2000,"cena":6.28,"lead":80},
	{"produkt":"TWTREB-016C-1","nazwaSurowca":"DURE THAN","dostawca":"ARKAL","moq":200,"cena":3.88,"lead":70},
	{"produkt":"TWTREB-016C-1","nazwaSurowca":"DURE THAN","dostawca":"DS.SMITH","moq":500,"cena":4.87,"lead":60},
	{"produkt":"TWTREC-003A-1","nazwaSurowca":"TECHNYL NATURALNY","dostawca":"SOLVAY","moq":1000,"cena":3.58,"lead":90},
	{"produkt":"TWTREC-003A-1","nazwaSurowca":"TECHNYL NATURALNY","dostawca":"TECHNOCOMPAUND","moq":200,"cena":2.76,"lead":40},
	{"produkt":"TWHL2010030","nazwaSurowca":"TERLURAN","dostawca":"ALBIS","moq":2000,"cena":4.09,"lead":80},
	{"produkt":"TWHL2010030","nazwaSurowca":"TERLURAN","dostawca":"ALCOMEX","moq":400,"cena":3.99,"lead":70},
	{"produkt":"TWSM45208910201","nazwaSurowca":"ULTRAMID CZARNY ","dostawca":"ALBIS","moq":500,"cena":3.35,"lead":40},
	{"produkt":"TWSM45208910201","nazwaSurowca":"ULTRAMID CZARNY ","dostawca":"HILTI KUNSTSTOFF","moq":600,"cena":3.88,"lead":60},
	{"produkt":"TWSM45208910201","nazwaSurowca":"ULTRAMID CZARNY ","dostawca":"RESINEX","moq":200,"cena":4.25,"lead":50},
	{"produkt":"TWSM45208910101","nazwaSurowca":"ULTRAMID CZARNY ","dostawca":"ALBIS","moq":500,"cena":3.35,"lead":40},
	{"produkt":"TWSM45208910101","nazwaSurowca":"ULTRAMID CZARNY ","dostawca":"HILTI KUNSTSTOFF","moq":600,"cena":3.88,"lead":60},
	{"produkt":"TWSM45208910101","nazwaSurowca":"ULTRAMID CZARNY ","dostawca":"RESINEX","moq":200,"cena":4.25,"lead":50},
	{"produkt":"TWCDBARIERKABIA","nazwaSurowca":"MOPLEN","dostawca":"ARKAL","moq":5000,"cena":4.78,"lead":40},
	{"produkt":"TWCDBARIERKABIA","nazwaSurowca":"MOPLEN","dostawca":"BIESTERFELD","moq":400,"cena":5.35,"lead":20},
	{"produkt":"TWCDBARIERKABIA","nazwaSurowca":"MOPLEN","dostawca":"BITRON","moq":1000,"cena":5.22,"lead":30},
	{"produkt":"TWCDBARIERKACZE","nazwaSurowca":"MOPLEN","dostawca":"ARKAL","moq":5000,"cena":4.78,"lead":40},
	{"produkt":"TWCDBARIERKACZE","nazwaSurowca":"MOPLEN","dostawca":"BIESTERFELD","moq":400,"cena":5.35,"lead":20},
	{"produkt":"TWCDBARIERKACZE","nazwaSurowca":"MOPLEN","dostawca":"BITRON","moq":1000,"cena":5.22,"lead":30},
	{"produkt":"TWCDBARIERKANIE","nazwaSurowca":"MOPLEN","dostawca":"ARKAL","moq":5000,"cena":4.78,"lead":40},
	{"produkt":"TWCDBARIERKANIE","nazwaSurowca":"MOPLEN","dostawca":"BIESTERFELD","moq":400,"cena":5.35,"lead":20},
	{"produkt":"TWCDBARIERKANIE","nazwaSurowca":"MOPLEN","dostawca":"BITRON","moq":1000,"cena":5.22,"lead":30},
	{"produkt":"TWCDBARIERKAZIE","nazwaSurowca":"MOPLEN","dostawca":"ARKAL","moq":5000,"cena":4.78,"lead":40},
	{"produkt":"TWCDBARIERKAZIE","nazwaSurowca":"MOPLEN","dostawca":"BIESTERFELD","moq":400,"cena":5.35,"lead":20},
	{"produkt":"TWCDBARIERKAZIE","nazwaSurowca":"MOPLEN","dostawca":"BITRON","moq":1000,"cena":5.22,"lead":30},
	{"produkt":"TWCDBARIERKAZOL","nazwaSurowca":"MOPLEN","dostawca":"ARKAL","moq":5000,"cena":4.78,"lead":40},
	{"produkt":"TWCDBARIERKAZOL","nazwaSurowca":"MOPLEN","dostawca":"BIESTERFELD","moq":400,"cena":5.35,"lead":20},
	{"produkt":"TWCDBARIERKAZOL","nazwaSurowca":"MOPLEN","dostawca":"BITRON","moq":1000,"cena":5.22,"lead":30},
	{"produkt":"TWTRET-933A-1","nazwaSurowca":"RYTON","dostawca":"ARKAL","moq":6000,"cena":3.05,"lead":90},
	{"produkt":"TWTRET-933A-1","nazwaSurowca":"RYTON","dostawca":"AWIT","moq":100,"cena":3.99,"lead":60},
	{"produkt":"TWTRET-933A-1","nazwaSurowca":"RYTON","dostawca":"BAYER","moq":300,"cena":3.87,"lead":60},
	{"produkt":"TWTRET-933A-1","nazwaSurowca":"RYTON","dostawca":"BIESTERFELD","moq":700,"cena":3.21,"lead":80},
	{"produkt":"TWAR10028516","nazwaSurowca":"ULTRADUR","dostawca":"ALCOMEX","moq":300,"cena":5.25,"lead":20},
	{"produkt":"TWAR10028516","nazwaSurowca":"ULTRADUR","dostawca":"BITRON","moq":1000,"cena":3.55,"lead":50},
	{"produkt":"TWHL2010030","nazwaSurowca":"DERLIN","dostawca":"BASELL","moq":300,"cena":4.28,"lead":30},
	{"produkt":"TWHL2010030","nazwaSurowca":"DERLIN","dostawca":"AWIT","moq":400,"cena":2.67,"lead":20},
	{"produkt":"TWTRET-999A","nazwaSurowca":"SANTOPRENE","dostawca":"BASF","moq":600,"cena":4.87,"lead":20},
	{"produkt":"TWTRET-999A","nazwaSurowca":"SANTOPRENE","dostawca":"KUNSTSTOFF-KONTOR","moq":200,"cena":3.62,"lead":70},
	{"produkt":"TWTRET-999A","nazwaSurowca":"SANTOPRENE","dostawca":"SOLVAY","moq":100,"cena":3.99,"lead":60},
	{"produkt":"TWALKRZESLOPRZE","nazwaSurowca":"MAKROLON","dostawca":"BAYER","moq":1000,"cena":5.03,"lead":60},
	{"produkt":"TWALKRZESLOPRZE","nazwaSurowca":"MAKROLON","dostawca":"SOLVAY","moq":500,"cena":6.87,"lead":40},
	{"produkt":"TWAR13354419","nazwaSurowca":"HOSTAFORM","dostawca":"BAYER","moq":2000,"cena":5.88,"lead":30},
	{"produkt":"TWAR13354419","nazwaSurowca":"HOSTAFORM","dostawca":"UMPOL","moq":1000,"cena":3.25,"lead":30},
	{"produkt":"TWVA546327","nazwaSurowca":"RADILON","dostawca":"BAYER","moq":4000,"cena":2.99,"lead":70},
	{"produkt":"TWSF102454","nazwaSurowca":"CRASTIN","dostawca":"BIESTERFELD","moq":200,"cena":2.89,"lead":40},
	{"produkt":"TWSF102454","nazwaSurowca":"CRASTIN","dostawca":"ALCOMEX","moq":500,"cena":3.01,"lead":20},
	{"produkt":"TWAR13350884","nazwaSurowca":"TERLURAN","dostawca":"BRENNTAG","moq":900,"cena":4.99,"lead":30},
	{"produkt":"TWAR13350884","nazwaSurowca":"TERLURAN","dostawca":"SOLVAY","moq":300,"cena":3.88,"lead":60},
	{"produkt":"TWVTVB514915","nazwaSurowca":"SECULEN","dostawca":"BRUSS","moq":300,"cena":2.87,"lead":80},
	{"produkt":"TWVTVB514915","nazwaSurowca":"SECULEN","dostawca":"BSB","moq":5000,"cena":3.99,"lead":20},
	{"produkt":"TWABKORI","nazwaSurowca":"LEXAN","dostawca":"DANJE POLIMER","moq":100,"cena":4.87,"lead":70},
	{"produkt":"TWABKORI","nazwaSurowca":"LEXAN","dostawca":"MCPP","moq":1000,"cena":4.88,"lead":90},
	{"produkt":"TWVW-5NA-885-739","nazwaSurowca":"MOPLEN","dostawca":"DIE TECH ","moq":200,"cena":5.8,"lead":30},
	{"produkt":"TWVW-5NA-885-739","nazwaSurowca":"MOPLEN","dostawca":"SOLVAY","moq":1000,"cena":3.98,"lead":80},
	{"produkt":"TWVW-5NA-885-740","nazwaSurowca":"MOPLEN","dostawca":"DIE TECH ","moq":200,"cena":5.8,"lead":30},
	{"produkt":"TWVW-5NA-885-740","nazwaSurowca":"MOPLEN","dostawca":"SOLVAY","moq":1000,"cena":3.98,"lead":80},
	{"produkt":"TWVW-5NA-885-933","nazwaSurowca":"MOPLEN","dostawca":"DIE TECH ","moq":200,"cena":5.8,"lead":30},
	{"produkt":"TWVW-5NA-885-933","nazwaSurowca":"MOPLEN","dostawca":"SOLVAY","moq":1000,"cena":3.98,"lead":80},
	{"produkt":"TWVW-5NA-885-934B","nazwaSurowca":"MOPLEN","dostawca":"DIE TECH ","moq":200,"cena":5.8,"lead":30},
	{"produkt":"TWVW-5NA-885-934B","nazwaSurowca":"MOPLEN","dostawca":"SOLVAY","moq":1000,"cena":3.98,"lead":80},
	{"produkt":"TWSH00994187CE","nazwaSurowca":"ARNITE","dostawca":"DSM ","moq":1000,"cena":4.33,"lead":50},
	{"produkt":"TWSH00994187CE","nazwaSurowca":"ARNITE","dostawca":"DUPONT","moq":400,"cena":4.02,"lead":30},
	{"produkt":"TWSHS1A62653","nazwaSurowca":"STANYL","dostawca":"DSM ","moq":2000,"cena":4.56,"lead":60},
	{"produkt":"TWSHS1A62653","nazwaSurowca":"STANYL","dostawca":"DIE TECH ","moq":600,"cena":6.25,"lead":80},
	{"produkt":"TWDT1873M5","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":5000,"cena":4.77,"lead":80},
	{"produkt":"TWDT1873M5","nazwaSurowca":"ZYTEL","dostawca":"HILTI KUNSTSTOFF","moq":400,"cena":3.99,"lead":60},
	{"produkt":"TWDT1873M5","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":1000,"cena":3.54,"lead":40},
	{"produkt":"TWDT1881M5","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":5000,"cena":4.77,"lead":80},
	{"produkt":"TWDT1881M5","nazwaSurowca":"ZYTEL","dostawca":"HILTI KUNSTSTOFF","moq":400,"cena":3.99,"lead":60},
	{"produkt":"TWDT1881M5","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":1000,"cena":3.54,"lead":40},
	{"produkt":"TWDTOB1701M5R02","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":5000,"cena":4.77,"lead":80},
	{"produkt":"TWDTOB1701M5R02","nazwaSurowca":"ZYTEL","dostawca":"HILTI KUNSTSTOFF","moq":400,"cena":3.99,"lead":60},
	{"produkt":"TWDTOB1701M5R02","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":1000,"cena":3.54,"lead":40},
	{"produkt":"TWDTOB1752","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":5000,"cena":4.77,"lead":80},
	{"produkt":"TWDTOB1752","nazwaSurowca":"ZYTEL","dostawca":"HILTI KUNSTSTOFF","moq":400,"cena":3.99,"lead":60},
	{"produkt":"TWDTOB1752","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":1000,"cena":3.54,"lead":40},
	{"produkt":"TWDTOB1752M5R02","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":5000,"cena":4.77,"lead":80},
	{"produkt":"TWDTOB1752M5R02","nazwaSurowca":"ZYTEL","dostawca":"HILTI KUNSTSTOFF","moq":400,"cena":3.99,"lead":60},
	{"produkt":"TWDTOB1752M5R02","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":1000,"cena":3.54,"lead":40},
	{"produkt":"TWDTOB1752M5R03","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":5000,"cena":4.77,"lead":80},
	{"produkt":"TWDTOB1752M5R03","nazwaSurowca":"ZYTEL","dostawca":"HILTI KUNSTSTOFF","moq":400,"cena":3.99,"lead":60},
	{"produkt":"TWDTOB1752M5R03","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":1000,"cena":3.54,"lead":40},
	{"produkt":"TWDTPP1856M5","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":5000,"cena":4.77,"lead":80},
	{"produkt":"TWDTPP1856M5","nazwaSurowca":"ZYTEL","dostawca":"HILTI KUNSTSTOFF","moq":400,"cena":3.99,"lead":60},
	{"produkt":"TWDTPP1856M5","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":1000,"cena":3.54,"lead":40},
	{"produkt":"TWDTPP1890M5","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":5000,"cena":4.77,"lead":80},
	{"produkt":"TWDTPP1890M5","nazwaSurowca":"ZYTEL","dostawca":"HILTI KUNSTSTOFF","moq":400,"cena":3.99,"lead":60},
	{"produkt":"TWDTPP1890M5","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":1000,"cena":3.54,"lead":40},
	{"produkt":"TWDTPP1891M5","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":5000,"cena":4.77,"lead":80},
	{"produkt":"TWDTPP1891M5","nazwaSurowca":"ZYTEL","dostawca":"HILTI KUNSTSTOFF","moq":400,"cena":3.99,"lead":60},
	{"produkt":"TWDTPP1891M5","nazwaSurowca":"ZYTEL","dostawca":"DUPONT","moq":1000,"cena":3.54,"lead":40},
	{"produkt":"TWVW-2K6-868-823","nazwaSurowca":"PULSE","dostawca":"ELHUS","moq":1000,"cena":4.29,"lead":60},
	{"produkt":"TWVW-2K6-868-823","nazwaSurowca":"PULSE","dostawca":"FRITZ SCHIESS","moq":500,"cena":4.36,"lead":30},
	{"produkt":"TWVW-2K6-868-823","nazwaSurowca":"PULSE","dostawca":"MCPP","moq":1000,"cena":4.99,"lead":40},
	{"produkt":"TWVW-2K6-868-823","nazwaSurowca":"PULSE","dostawca":"POMAROL","moq":900,"cena":3.333,"lead":30},
	{"produkt":"TWVW-2K6-868-823","nazwaSurowca":"PULSE","dostawca":"SCHULMAN","moq":2000,"cena":3.19,"lead":90},
	{"produkt":"TWVW-2K5-868-824","nazwaSurowca":"PULSE","dostawca":"ELHUS","moq":1000,"cena":4.29,"lead":60},
	{"produkt":"TWVW-2K5-868-824","nazwaSurowca":"PULSE","dostawca":"FRITZ SCHIESS","moq":500,"cena":4.36,"lead":30},
	{"produkt":"TWVW-2K5-868-824","nazwaSurowca":"PULSE","dostawca":"MCPP","moq":1000,"cena":4.99,"lead":40},
	{"produkt":"TWVW-2K5-868-824","nazwaSurowca":"PULSE","dostawca":"POMAROL","moq":900,"cena":3.333,"lead":30},
	{"produkt":"TWVW-2K5-868-824","nazwaSurowca":"PULSE","dostawca":"SCHULMAN","moq":2000,"cena":3.19,"lead":90},
	{"produkt":"TWDTPRZE1765M5","nazwaSurowca":"ATOFINA","dostawca":"KORPORACJA KGL","moq":1000,"cena":3.65,"lead":60},
	{"produkt":"TWDTPRZE1765M5","nazwaSurowca":"ATOFINA","dostawca":"MCPP","moq":1000,"cena":3.65,"lead":60},
	{"produkt":"TWHL2007204","nazwaSurowca":"ALTUGLAS","dostawca":"KORPORACJA KGL","moq":1000,"cena":3.22,"lead":60},
	{"produkt":"TWTRET-922A-1","nazwaSurowca":"STAREX","dostawca":"KORPORACJA KGL","moq":1000,"cena":3.05,"lead":60},
	{"produkt":"TWTRET-922A-1","nazwaSurowca":"STAREX","dostawca":"SOLVAY","moq":200,"cena":3.47,"lead":90},
	{"produkt":"TWAR13280107","nazwaSurowca":"VESTAMID","dostawca":"KUNSTSTOFF-KONTOR","moq":300,"cena":3.66,"lead":40},
	{"produkt":"TWAR13280107","nazwaSurowca":"VESTAMID","dostawca":"SOLVAY","moq":200,"cena":3.55,"lead":60},
	{"produkt":"TWD-DEL02","nazwaSurowca":"TEFABLOC","dostawca":"MCPP","moq":500,"cena":3.06,"lead":80},
	{"produkt":"TWD-DEL02","nazwaSurowca":"TEFABLOC","dostawca":"ZAKŁADY AZOTOWE","moq":1000,"cena":3.1,"lead":30},
	{"produkt":"TWD-DEL02","nazwaSurowca":"TEFABLOC","dostawca":"RADICI","moq":300,"cena":2.66,"lead":50},
	{"produkt":"TWD-DEL02NIEBIE","nazwaSurowca":"TEFABLOC","dostawca":"MCPP","moq":500,"cena":3.06,"lead":80},
	{"produkt":"TWD-DEL02NIEBIE","nazwaSurowca":"TEFABLOC","dostawca":"ZAKŁADY AZOTOWE","moq":1000,"cena":3.1,"lead":30},
	{"produkt":"TWD-DEL02NIEBIE","nazwaSurowca":"TEFABLOC","dostawca":"RADICI","moq":300,"cena":2.66,"lead":50},
	{"produkt":"TWD-DEL02ZIEL","nazwaSurowca":"TEFABLOC","dostawca":"MCPP","moq":500,"cena":3.06,"lead":80},
	{"produkt":"TWD-DEL02ZIEL","nazwaSurowca":"TEFABLOC","dostawca":"ZAKŁADY AZOTOWE","moq":1000,"cena":3.1,"lead":30},
	{"produkt":"TWD-DEL02ZIEL","nazwaSurowca":"TEFABLOC","dostawca":"RADICI","moq":300,"cena":2.66,"lead":50},
	{"produkt":"TWD-DEL02ZOLTA","nazwaSurowca":"TEFABLOC","dostawca":"MCPP","moq":500,"cena":3.06,"lead":80},
	{"produkt":"TWD-DEL02ZOLTA","nazwaSurowca":"TEFABLOC","dostawca":"ZAKŁADY AZOTOWE","moq":1000,"cena":3.1,"lead":30},
	{"produkt":"TWD-DEL02ZOLTA","nazwaSurowca":"TEFABLOC","dostawca":"RADICI","moq":300,"cena":2.66,"lead":50},
	{"produkt":"TWD-DEL03","nazwaSurowca":"TEFABLOC","dostawca":"MCPP","moq":500,"cena":3.06,"lead":80},
	{"produkt":"TWD-DEL03","nazwaSurowca":"TEFABLOC","dostawca":"ZAKŁADY AZOTOWE","moq":1000,"cena":3.1,"lead":30},
	{"produkt":"TWD-DEL03","nazwaSurowca":"TEFABLOC","dostawca":"RADICI","moq":300,"cena":2.66,"lead":50},
	{"produkt":"TWD-DEL03ZOLT","nazwaSurowca":"TEFABLOC","dostawca":"MCPP","moq":500,"cena":3.06,"lead":80},
	{"produkt":"TWD-DEL03ZOLT","nazwaSurowca":"TEFABLOC","dostawca":"ZAKŁADY AZOTOWE","moq":1000,"cena":3.1,"lead":30},
	{"produkt":"TWD-DEL03ZOLT","nazwaSurowca":"TEFABLOC","dostawca":"RADICI","moq":300,"cena":2.66,"lead":50},
	{"produkt":"TWAR13266140","nazwaSurowca":"RADILON","dostawca":"RADICI","moq":1000,"cena":3.42,"lead":20},
	{"produkt":"TWAR13266140","nazwaSurowca":"RADILON","dostawca":"RESINEX","moq":700,"cena":2.88,"lead":40},
	{"produkt":"TWSF187011","nazwaSurowca":"TECHNYL","dostawca":"RESINEX","moq":100,"cena":4.68,"lead":30},
	{"produkt":"TWSF187011","nazwaSurowca":"TECHNYL","dostawca":"SABIC INNOVATE","moq":300,"cena":4.22,"lead":35},
	{"produkt":"TWSF187011","nazwaSurowca":"TECHNYL","dostawca":"KUNSTSTOFF-KONTOR","moq":500,"cena":4.89,"lead":45},
	{"produkt":"TWSF187011","nazwaSurowca":"TECHNYL","dostawca":"SOLVAY","moq":1000,"cena":4.02,"lead":30},
	{"produkt":"TWSF188399","nazwaSurowca":"TECHNYL","dostawca":"RESINEX","moq":100,"cena":4.68,"lead":30},
	{"produkt":"TWSF188399","nazwaSurowca":"TECHNYL","dostawca":"SABIC INNOVATE","moq":300,"cena":4.22,"lead":35},
	{"produkt":"TWSF188399","nazwaSurowca":"TECHNYL","dostawca":"KUNSTSTOFF-KONTOR","moq":500,"cena":4.89,"lead":45},
	{"produkt":"TWSF188399","nazwaSurowca":"TECHNYL","dostawca":"SOLVAY","moq":1000,"cena":4.02,"lead":30},
	{"produkt":"TWVA546308","nazwaSurowca":"TECHNYL","dostawca":"RESINEX","moq":100,"cena":4.68,"lead":30},
	{"produkt":"TWVA546308","nazwaSurowca":"TECHNYL","dostawca":"SABIC INNOVATE","moq":300,"cena":4.22,"lead":35},
	{"produkt":"TWVA546308","nazwaSurowca":"TECHNYL","dostawca":"KUNSTSTOFF-KONTOR","moq":500,"cena":4.89,"lead":45},
	{"produkt":"TWVA546308","nazwaSurowca":"TECHNYL","dostawca":"SOLVAY","moq":1000,"cena":4.02,"lead":30},
	{"produkt":"TWTREC-003A-1","nazwaSurowca":"TECHNYL","dostawca":"RESINEX","moq":100,"cena":4.68,"lead":30},
	{"produkt":"TWTREC-003A-1","nazwaSurowca":"TECHNYL","dostawca":"SABIC INNOVATE","moq":300,"cena":4.22,"lead":35},
	{"produkt":"TWTREC-003A-1","nazwaSurowca":"TECHNYL","dostawca":"KUNSTSTOFF-KONTOR","moq":500,"cena":4.89,"lead":45},
	{"produkt":"TWTREC-003A-1","nazwaSurowca":"TECHNYL","dostawca":"SOLVAY","moq":1000,"cena":4.02,"lead":30},
	{"produkt":"TWTREC-003B-1","nazwaSurowca":"TECHNYL","dostawca":"RESINEX","moq":100,"cena":4.68,"lead":30},
	{"produkt":"TWTREC-003B-1","nazwaSurowca":"TECHNYL","dostawca":"SABIC INNOVATE","moq":300,"cena":4.22,"lead":35},
	{"produkt":"TWTREC-003B-1","nazwaSurowca":"TECHNYL","dostawca":"KUNSTSTOFF-KONTOR","moq":500,"cena":4.89,"lead":45},
	{"produkt":"TWTREC-003B-1","nazwaSurowca":"TECHNYL","dostawca":"SOLVAY","moq":1000,"cena":4.02,"lead":30},
	{"produkt":"TWSTNEON09","nazwaSurowca":"TECHNYL","dostawca":"RESINEX","moq":100,"cena":4.68,"lead":30},
	{"produkt":"TWSTNEON09","nazwaSurowca":"TECHNYL","dostawca":"SABIC INNOVATE","moq":300,"cena":4.22,"lead":35},
	{"produkt":"TWSTNEON09","nazwaSurowca":"TECHNYL","dostawca":"KUNSTSTOFF-KONTOR","moq":500,"cena":4.89,"lead":45},
	{"produkt":"TWSTNEON09","nazwaSurowca":"TECHNYL","dostawca":"SOLVAY","moq":1000,"cena":4.02,"lead":30},
	{"produkt":"TWAR13264602","nazwaSurowca":"SECULEN","dostawca":"BRUSS","moq":300,"cena":2.87,"lead":80},
	{"produkt":"TWAR13264602","nazwaSurowca":"SECULEN","dostawca":"BSB","moq":5000,"cena":3.99,"lead":20},
	{"produkt":"TWAR13266145","nazwaSurowca":"SECULEN","dostawca":"BRUSS","moq":300,"cena":2.87,"lead":80},
	{"produkt":"TWAR13266145","nazwaSurowca":"SECULEN","dostawca":"BSB","moq":5000,"cena":3.99,"lead":20},
	{"produkt":"TWAR13311690","nazwaSurowca":"SECULEN","dostawca":"BRUSS","moq":300,"cena":2.87,"lead":80},
	{"produkt":"TWAR13311690","nazwaSurowca":"SECULEN","dostawca":"BSB","moq":5000,"cena":3.99,"lead":20},
	{"produkt":"TWAR13311691","nazwaSurowca":"SECULEN","dostawca":"BRUSS","moq":300,"cena":2.87,"lead":80},
	{"produkt":"TWAR13311691","nazwaSurowca":"SECULEN","dostawca":"BSB","moq":5000,"cena":3.99,"lead":20},
	{"produkt":"TWEL1000005","nazwaSurowca":"CYLOLAK","dostawca":"BSB","moq":500,"cena":3.06,"lead":80},
	{"produkt":"TWEL1000005","nazwaSurowca":"CYLOLAK","dostawca":"ZAKŁADY AZOTOWE","moq":1000,"cena":3.1,"lead":30},
	{"produkt":"TWEL1000005","nazwaSurowca":"CYLOLAK","dostawca":"RADICI","moq":300,"cena":2.66,"lead":50},
	{"produkt":"TWEL1000017","nazwaSurowca":"CYLOLAK","dostawca":"BSB","moq":500,"cena":3.06,"lead":80},
	{"produkt":"TWEL1000017","nazwaSurowca":"CYLOLAK","dostawca":"ZAKŁADY AZOTOWE","moq":1000,"cena":3.1,"lead":30},
	{"produkt":"TWEL1000017","nazwaSurowca":"CYLOLAK","dostawca":"RADICI","moq":300,"cena":2.66,"lead":50},
	{"produkt":"TWEL1000018","nazwaSurowca":"CYLOLAK","dostawca":"BSB","moq":500,"cena":3.06,"lead":80},
	{"produkt":"TWEL1000018","nazwaSurowca":"CYLOLAK","dostawca":"ZAKŁADY AZOTOWE","moq":1000,"cena":3.1,"lead":30},
	{"produkt":"TWEL1000018","nazwaSurowca":"CYLOLAK","dostawca":"RADICI","moq":300,"cena":2.66,"lead":50},
	{"produkt":"TWEL1000019","nazwaSurowca":"CYLOLAK","dostawca":"BSB","moq":500,"cena":3.06,"lead":80},
	{"produkt":"TWEL1000019","nazwaSurowca":"CYLOLAK","dostawca":"ZAKŁADY AZOTOWE","moq":1000,"cena":3.1,"lead":30},
	{"produkt":"TWEL1000019","nazwaSurowca":"CYLOLAK","dostawca":"RADICI","moq":300,"cena":2.66,"lead":50},
	{"produkt":"TWVW-7C1-863-419","nazwaSurowca":"ACULON","dostawca":"DSM ","moq":200,"cena":3.76,"lead":35},
	{"produkt":"TWVW-7C1-863-419","nazwaSurowca":"ACULON","dostawca":"SABIC INNOVATE","moq":600,"cena":4.15,"lead":60},
	{"produkt":"TWVW-7C1-863-419","nazwaSurowca":"ACULON","dostawca":"BRUSS","moq":1000,"cena":3.12,"lead":50},
	{"produkt":"TWTREU-037D-1","nazwaSurowca":"ACULON","dostawca":"DSM ","moq":200,"cena":3.76,"lead":35},
	{"produkt":"TWTREU-037D-1","nazwaSurowca":"ACULON","dostawca":"SABIC INNOVATE","moq":600,"cena":4.15,"lead":60},
	{"produkt":"TWTREU-037D-1","nazwaSurowca":"ACULON","dostawca":"BRUSS","moq":1000,"cena":3.12,"lead":50},
	{"produkt":"TWTREU-037E-1","nazwaSurowca":"ACULON","dostawca":"DSM ","moq":200,"cena":3.76,"lead":35},
	{"produkt":"TWTREU-037E-1","nazwaSurowca":"ACULON","dostawca":"SABIC INNOVATE","moq":600,"cena":4.15,"lead":60},
	{"produkt":"TWTREU-037E-1","nazwaSurowca":"ACULON","dostawca":"BRUSS","moq":1000,"cena":3.12,"lead":50},
	{"produkt":"TWTREU-037F-1","nazwaSurowca":"ACULON","dostawca":"DSM ","moq":200,"cena":3.76,"lead":35},
	{"produkt":"TWTREU-037F-1","nazwaSurowca":"ACULON","dostawca":"SABIC INNOVATE","moq":600,"cena":4.15,"lead":60},
	{"produkt":"TWTREU-037F-1","nazwaSurowca":"ACULON","dostawca":"BRUSS","moq":1000,"cena":3.12,"lead":50},
	{"produkt":"TWTREU-037G-1","nazwaSurowca":"ACULON","dostawca":"DSM ","moq":200,"cena":3.76,"lead":35},
	{"produkt":"TWTREU-037G-1","nazwaSurowca":"ACULON","dostawca":"SABIC INNOVATE","moq":600,"cena":4.15,"lead":60},
	{"produkt":"TWTREU-037G-1","nazwaSurowca":"ACULON","dostawca":"BRUSS","moq":1000,"cena":3.12,"lead":50},
	{"produkt":"TWSF102531","nazwaSurowca":"CRASTIN","dostawca":"BIESTERFELD","moq":200,"cena":2.89,"lead":40},
	{"produkt":"TWSF102531","nazwaSurowca":"CRASTIN","dostawca":"ALCOMEX","moq":500,"cena":3.01,"lead":20},
	{"produkt":"TWDTPP1985M2","nazwaSurowca":"CRASTIN","dostawca":"BIESTERFELD","moq":200,"cena":2.89,"lead":40},
	{"produkt":"TWDTPP1985M2","nazwaSurowca":"CRASTIN","dostawca":"ALCOMEX","moq":500,"cena":3.01,"lead":20},
	{"produkt":"TWDTPP1985M2UZ","nazwaSurowca":"CRASTIN","dostawca":"BIESTERFELD","moq":200,"cena":2.89,"lead":40},
	{"produkt":"TWDTPP1985M2UZ","nazwaSurowca":"CRASTIN","dostawca":"ALCOMEX","moq":500,"cena":3.01,"lead":20},
	{"produkt":"TWDTPP1993M2","nazwaSurowca":"CRASTIN","dostawca":"BIESTERFELD","moq":200,"cena":2.89,"lead":40},
	{"produkt":"TWDTPP1993M2","nazwaSurowca":"CRASTIN","dostawca":"ALCOMEX","moq":500,"cena":3.01,"lead":20},
	{"produkt":"TWSF102455","nazwaSurowca":"CRASTIN","dostawca":"BIESTERFELD","moq":200,"cena":2.89,"lead":40},
	{"produkt":"TWSF102455","nazwaSurowca":"CRASTIN","dostawca":"ALCOMEX","moq":500,"cena":3.01,"lead":20},
	{"produkt":"TWAR13350884","nazwaSurowca":"DYBLEND","dostawca":"HOFFMAN","moq":1000,"cena":5.23,"lead":50},
	{"produkt":"TWAR13350884","nazwaSurowca":"DYBLEND","dostawca":"ALCOMEX","moq":300,"cena":5.55,"lead":20},
	{"produkt":"TWAR13350884","nazwaSurowca":"DYBLEND","dostawca":"BRUSS","moq":1500,"cena":5.12,"lead":35},
	{"produkt":"TWAR13350885","nazwaSurowca":"DYBLEND","dostawca":"HOFFMAN","moq":1000,"cena":5.23,"lead":50},
	{"produkt":"TWAR13350885","nazwaSurowca":"DYBLEND","dostawca":"ALCOMEX","moq":300,"cena":5.55,"lead":20},
	{"produkt":"TWAR13350885","nazwaSurowca":"DYBLEND","dostawca":"BRUSS","moq":1500,"cena":5.12,"lead":35},
	{"produkt":"TWAR13367890","nazwaSurowca":"DYBLEND","dostawca":"HOFFMAN","moq":1000,"cena":5.23,"lead":50},
	{"produkt":"TWAR13367890","nazwaSurowca":"DYBLEND","dostawca":"ALCOMEX","moq":300,"cena":5.55,"lead":20},
	{"produkt":"TWAR13367890","nazwaSurowca":"DYBLEND","dostawca":"BRUSS","moq":1500,"cena":5.12,"lead":35},
	{"produkt":"TWAR13367891","nazwaSurowca":"DYBLEND","dostawca":"HOFFMAN","moq":1000,"cena":5.23,"lead":50},
	{"produkt":"TWAR13367891","nazwaSurowca":"DYBLEND","dostawca":"ALCOMEX","moq":300,"cena":5.55,"lead":20},
	{"produkt":"TWAR13367891","nazwaSurowca":"DYBLEND","dostawca":"BRUSS","moq":1500,"cena":5.12,"lead":35},
	{"produkt":"TWBR935395-102","nazwaSurowca":"RTP","dostawca":"RTP","moq":500,"cena":7.22,"lead":50},
	{"produkt":"TWBR935395-103","nazwaSurowca":"RTP","dostawca":"RTP","moq":500,"cena":7.22,"lead":50},
	{"produkt":"TWBR935395-104","nazwaSurowca":"RTP","dostawca":"RTP","moq":500,"cena":7.22,"lead":50},
	{"produkt":"TWDA2318890125L","nazwaSurowca":"SARLINK","dostawca":"TEKNOR","moq":400,"cena":3.22,"lead":20},
	{"produkt":"TWDA2318890125L","nazwaSurowca":"SARLINK","dostawca":"RTP","moq":1000,"cena":3.78,"lead":30},
	{"produkt":"TWDA2318890125L","nazwaSurowca":"SARLINK","dostawca":"BRUSS","moq":600,"cena":4.2,"lead":60},
	{"produkt":"TWDA2318890225R","nazwaSurowca":"SARLINK","dostawca":"TEKNOR","moq":400,"cena":3.22,"lead":20},
	{"produkt":"TWDA2318890225R","nazwaSurowca":"SARLINK","dostawca":"RTP","moq":1000,"cena":3.78,"lead":30},
	{"produkt":"TWDA2318890225R","nazwaSurowca":"SARLINK","dostawca":"BRUSS","moq":600,"cena":4.2,"lead":60},
	{"produkt":"TWDAA1178890000","nazwaSurowca":"SARLINK","dostawca":"TEKNOR","moq":400,"cena":3.22,"lead":20},
	{"produkt":"TWDAA1178890000","nazwaSurowca":"SARLINK","dostawca":"RTP","moq":1000,"cena":3.78,"lead":30},
	{"produkt":"TWDAA1178890000","nazwaSurowca":"SARLINK","dostawca":"BRUSS","moq":600,"cena":4.2,"lead":60},
	{"produkt":"TWDA2058890725","nazwaSurowca":"SARLINK","dostawca":"TEKNOR","moq":400,"cena":3.22,"lead":20},
	{"produkt":"TWDA2058890725","nazwaSurowca":"SARLINK","dostawca":"RTP","moq":1000,"cena":3.78,"lead":30},
	{"produkt":"TWDA2058890725","nazwaSurowca":"SARLINK","dostawca":"BRUSS","moq":600,"cena":4.2,"lead":60},
	{"produkt":"TWDA2058890825","nazwaSurowca":"SARLINK","dostawca":"TEKNOR","moq":400,"cena":3.22,"lead":20},
	{"produkt":"TWDA2058890825","nazwaSurowca":"SARLINK","dostawca":"RTP","moq":1000,"cena":3.78,"lead":30},
	{"produkt":"TWDA2058890825","nazwaSurowca":"SARLINK","dostawca":"BRUSS","moq":600,"cena":4.2,"lead":60},
	{"produkt":"TWTIFANS936","nazwaSurowca":"TABOREN","dostawca":"TEKNOR","moq":2000,"cena":5.32,"lead":40},
	{"produkt":"TWTIFANS936","nazwaSurowca":"TABOREN","dostawca":"DSM ","moq":1500,"cena":4.8,"lead":15},
	{"produkt":"TWTIFANS937","nazwaSurowca":"TABOREN","dostawca":"TEKNOR","moq":2000,"cena":5.32,"lead":40},
	{"produkt":"TWTIFANS937","nazwaSurowca":"TABOREN","dostawca":"DSM ","moq":1500,"cena":4.8,"lead":15},
	{"produkt":"TWCISLUCH","nazwaSurowca":"TARNAMID","dostawca":"RADICI","moq":1000,"cena":1.45,"lead":30},
	{"produkt":"TWCISLUCH","nazwaSurowca":"TARNAMID","dostawca":"BSB","moq":1000,"cena":2.3,"lead":50},
	{"produkt":"TWCISLUCH","nazwaSurowca":"TARNAMID","dostawca":"TEKNOR","moq":3000,"cena":1.89,"lead":45},
	{"produkt":"TWCISLUCHKUB","nazwaSurowca":"TARNAMID","dostawca":"RADICI","moq":1000,"cena":1.45,"lead":30},
	{"produkt":"TWCISLUCHKUB","nazwaSurowca":"TARNAMID","dostawca":"BSB","moq":1000,"cena":2.3,"lead":50},
	{"produkt":"TWCISLUCHKUB","nazwaSurowca":"TARNAMID","dostawca":"TEKNOR","moq":3000,"cena":1.89,"lead":45},
	{"produkt":"TWCISLUCHPAL","nazwaSurowca":"TARNAMID","dostawca":"RADICI","moq":1000,"cena":1.45,"lead":30},
	{"produkt":"TWCISLUCHPAL","nazwaSurowca":"TARNAMID","dostawca":"BSB","moq":1000,"cena":2.3,"lead":50},
	{"produkt":"TWCISLUCHPAL","nazwaSurowca":"TARNAMID","dostawca":"TEKNOR","moq":3000,"cena":1.89,"lead":45},
	{"produkt":"TWCISLUCHWIE","nazwaSurowca":"TARNAMID","dostawca":"RADICI","moq":1000,"cena":1.45,"lead":30},
	{"produkt":"TWCISLUCHWIE","nazwaSurowca":"TARNAMID","dostawca":"BSB","moq":1000,"cena":2.3,"lead":50},
	{"produkt":"TWCISLUCHWIE","nazwaSurowca":"TARNAMID","dostawca":"TEKNOR","moq":3000,"cena":1.89,"lead":45},
	{"produkt":"TWAR13264598","nazwaSurowca":"TECHNOFIN","dostawca":"TECHNOCOMPAUND","moq":300,"cena":3.56,"lead":40},
	{"produkt":"TWAR13264599","nazwaSurowca":"TECHNOFIN","dostawca":"TECHNOCOMPAUND","moq":2000,"cena":5.32,"lead":70},
	{"produkt":"TWAR13266137","nazwaSurowca":"TECHNOFIN","dostawca":"TECHNOCOMPAUND","moq":1000,"cena":4.78,"lead":30},
	{"produkt":"TWSM90345100-03","nazwaSurowca":"XYRON","dostawca":"RADICI","moq":2000,"cena":1.45,"lead":20},
	{"produkt":"TWSM90345100-03","nazwaSurowca":"XYRON","dostawca":"SABIC INNOVATE","moq":4000,"cena":2.56,"lead":45},
	{"produkt":"TWSM90345100-02","nazwaSurowca":"XYRON","dostawca":"RADICI","moq":2000,"cena":1.45,"lead":20},
	{"produkt":"TWSM90345100-02","nazwaSurowca":"XYRON","dostawca":"SABIC INNOVATE","moq":4000,"cena":2.56,"lead":45},
	{"produkt":"TWSM90283100-04","nazwaSurowca":"XYRON","dostawca":"RADICI","moq":2000,"cena":1.45,"lead":20},
	{"produkt":"TWSM90283100-04","nazwaSurowca":"XYRON","dostawca":"SABIC INNOVATE","moq":4000,"cena":2.56,"lead":45}
];

function showSuppliers(elem) {
	var property = '';
	var value = '';
    clearFilterTable();
	runFilter(elem.id, elem.value);
	
	if(elem.id == 'selectbasic'){
		document.getElementById("moq").value = null;
		document.getElementById("lead").value = null;
		document.getElementById("cena").value = null;
		
		document.getElementById("moq2").value = null;
		document.getElementById("lead2").value = null;
		document.getElementById("cena2").value = null;
	}
}

function runFilter(property, value){
	var product = getCurrentProduct();
	// console.log("Proeprty recieved: " + property );
	// console.log("value recieved: " + value );
	var result = Produkty.filter(function(x){
		return x.produkt == product;
	});
	
	var resultSearch = [];
	resultSearch = result.filter(function(produkt){
		return produkt.moq <= (document.getElementById("moq2").value || 20000) && (produkt.moq  >= document.getElementById("moq").value);
	});
	resultSearch = resultSearch.filter(function(produkt){
		return produkt.lead <= (document.getElementById("lead2").value || 20000) && (produkt.lead >= document.getElementById("lead").value);
	});
	resultSearch = resultSearch.filter(function(produkt){
		return produkt.cena <= (document.getElementById("cena2").value || 20000) && (produkt.cena >= document.getElementById("cena").value);
	});
	
	appendRecord(resultSearch)
}

function appendRecord(obj){
	
	for (var i=0; i< obj.length; i++){
		//console.log(obj[i]);
		var node = document.createElement("tr");
		var nodeDostawca = document.createElement("td");
		nodeDostawca.innerHTML = obj[i].dostawca;
		
		var nodeNazwaSurowca = document.createElement("td");
		nodeNazwaSurowca.innerHTML = obj[i].nazwaSurowca;
		
		var nodeMoq = document.createElement("td");
		nodeMoq.innerHTML = obj[i].moq;
		
		var nodeCena= document.createElement("td");
		nodeCena.innerHTML = obj[i].cena;
		
		var nodeLead = document.createElement("td");
		nodeLead.innerHTML = obj[i].lead;
		
		node.appendChild(nodeDostawca);
		node.appendChild(nodeNazwaSurowca);
		node.appendChild(nodeMoq);
		node.appendChild(nodeCena);
		node.appendChild(nodeLead);

		document.getElementById("filterResult").appendChild(node);
	}
	
	var filterTable = document.getElementById("filterResult");
	var resultResponse = filterTable.children[1];

	if(filterTable.children.length > 1){
		var dostawca = filterTable.children[1].children[0].innerHTML;
		var topMOQ = filterTable.children[1].children[2].innerHTML;
		var topLead = filterTable.children[1].children[4].innerHTML;
		document.getElementById("response").innerHTML = "Najlepszym dostawcą spełniającym dane kryteria jest: " + dostawca +", oferujący najniższą cenę, przy MOQ równym: " + topMOQ + ", oraz czasie realizacji: " + topLead + " dni";
	} else {
		document.getElementById("response").innerHTML = "Brak dostawców dla danych kryteriów";
	}
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

(function getProducts() {
    var A = ['-- Wybierz produkt --'];
    Produkty.forEach(function(elem) {
        A.push(elem.produkt);
    });
    A = A.filter(onlyUnique);
    for (var i = 0; i < A.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = A[i];
        document.getElementById("selectbasic").appendChild(option);
    }
})();

function getCurrentProduct() {
    var suppDropdown = document.getElementById("selectbasic");
    return suppDropdown.options[suppDropdown.selectedIndex].value
}

function clearFilterTable() {
    var filterTable = document.getElementById("filterResult");
    while (filterTable.childElementCount > 1) {
        filterTable.removeChild(filterTable.lastChild);
    }
}