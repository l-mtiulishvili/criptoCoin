იმის გამო, რომ API ბრაუზერში არ გვაძლევს ინფორმაციას, გავაკეთე პროქსი როუტი, რომელიც შეგიძლია გამოიყენოთ, 
მაგალითად ორი როუტი რომელიც დაგვჭირდება არის:
	
1) კოინების ლისტის წამოღების როუტი: https://powerful-atoll-78162.herokuapp.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=აქ_უნდა_იყოს_თქვენი_KEY
	კოინის შესახებ ინფოს წამოსაღები როუტი: https://powerful-atoll-78162.herokuapp.com/v1/cryptocurrency/quotes/latest?id=1,2&CMC_PRO_API_KEY=აქ_უნდა_იყოს_თქვენი_KEY
  
  link1: https://powerful-atoll-78162.herokuapp.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=5b4b2129-b2af-4ab5-8ffd-071cf4cb0da9
  link2: https://powerful-atoll-78162.herokuapp.com/v1/cryptocurrency/quotes/latest?id=1,2&CMC_PRO_API_KEY=5b4b2129-b2af-4ab5-8ffd-071cf4cb0da9

2) მოცემლუი ორი როუტის და ასევე სხვა როუტების დოკუმენტაცია შეგიძლიათ ნახოთ: https://coinmarketcap.com/api/documentation/v1/
 
 
UI ის ასაწყობად შეგიძლიათ გამოიყენოთ ნებისმიერი ფრეიმვორკი, ან არაფერი. აუცილებელია, რომ: 
კოინების არჩევის მერე, ბრაუზერმა შეინახოს მომხმარებლის არჩევანი და არ დარეფრეშების შემდეგ დარჩეს არჩეული 
კოინები ცხრილში.