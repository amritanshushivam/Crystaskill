'use client'

import Image from 'next/image'

const companies = [
  { 
    id: 1, 
    name: 'Accenture', 
    category: 'Consulting',
    logo: '/logos/accenture.PNG',
    width: 120,
    height: 80
  },
  { 
    id: 2, 
    name: 'TCS', 
    category: 'IT Services',
    logo: '/logos/tcs.png',
    width: 120,
    height: 80
  },
  { 
    id: 3, 
    name: 'Infosys', 
    category: 'IT Services',
    logo: '/logos/infosys.svg',
    width: 120,
    height: 80
  },
  { 
    id: 4, 
    name: 'Capgemini', 
    category: 'Consulting',
    logo: '/logos/capgemini.PNG',
    width: 120,
    height: 80
  },
  { 
    id: 5, 
    name: 'Wipro', 
    category: 'IT Services',
    logo: '/logos/wipro.PNG',
    width: 120,
    height: 80
  },
  { 
    id: 6, 
    name: 'IBM', 
    category: 'IT Services',
    logo: '/logos/IBM.PNG',
    width: 120,
    height: 80
  },
  { 
    id: 7, 
    name: 'Tech Mahindra', 
    category: 'IT Services',
    logo: '/logos/tech mahindra.PNG',
    width: 120,
    height: 80
  },
  { 
    id: 8, 
    name: 'Cognizant', 
    category: 'IT Services',
    logo: '/logos/cognizent.PNG',
    width: 120,
    height: 80
  },
]

export function HiringCompanies() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Hired by companies that define industries
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Our alumni work across the world's most respected organizations. From Fortune 500 companies to high-growth startups. They're solving real problems, building products, and advancing careers.
          </p>
        </div>

        {/* Grid of companies */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white border border-border rounded-lg p-8 transition-all duration-300 hover:border-accent hover:shadow-xl cursor-pointer group flex flex-col items-center justify-center min-h-[220px]"
              onClick={() => window.open(`https://${company.name.toLowerCase().replace(/\s+/g, '')}.com`, '_blank')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open(`https://${company.name.toLowerCase().replace(/\s+/g, '')}.com`, '_blank')
                }
              }}
            >
              {/* Company logo - actual image */}
              <div className="relative w-24 h-16 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className="object-contain max-w-full max-h-full"
                  quality={85}
                />
              </div>
              <h3 className="font-semibold text-base text-foreground group-hover:text-accent transition-colors text-center">
                {company.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                {company.category}
              </p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-3 gap-8 border-t border-border pt-12">
          <div>
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <p className="text-muted-foreground text-sm">
              Hiring partners actively recruiting
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">94%</div>
            <p className="text-muted-foreground text-sm">
              Placed within 6 months of graduation
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">45K+</div>
            <p className="text-muted-foreground text-sm">
              Alumni network globally
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
