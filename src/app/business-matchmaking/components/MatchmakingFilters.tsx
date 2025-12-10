'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterOptions {
  industry: string[];
  country: string[];
  businessType: string[];
  interests: string[];
}

interface MatchmakingFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const MatchmakingFilters = ({ onFilterChange }: MatchmakingFiltersProps) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterOptions>({
    industry: [],
    country: [],
    businessType: [],
    interests: []
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const filterCategories = {
    industry: [
      'Agriculture & Agribusiness',
      'Technology & Innovation',
      'Manufacturing',
      'Tourism & Hospitality',
      'Renewable Energy',
      'Healthcare',
      'Financial Services',
      'Retail & E-commerce'
    ],
    country: [
      'Madagascar',
      'Mauritius',
      'South Africa',
      'Kenya',
      'Nigeria',
      'Ghana',
      'Rwanda',
      'Senegal'
    ],
    businessType: [
      'Startup',
      'SME',
      'Corporate',
      'Investor',
      'Service Provider',
      'Manufacturer',
      'Distributor'
    ],
    interests: [
      'Investment Opportunities',
      'Strategic Partnerships',
      'Distribution Channels',
      'Technology Transfer',
      'Joint Ventures',
      'Export Markets',
      'Supplier Relationships'
    ]
  };

  const handleFilterToggle = (category: keyof FilterOptions, value: string) => {
    const updatedFilters = { ...selectedFilters };
    const categoryFilters = updatedFilters[category];
    
    if (categoryFilters.includes(value)) {
      updatedFilters[category] = categoryFilters.filter(item => item !== value);
    } else {
      updatedFilters[category] = [...categoryFilters, value];
    }
    
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const clearAllFilters = () => {
    const emptyFilters: FilterOptions = {
      industry: [],
      country: [],
      businessType: [],
      interests: []
    };
    setSelectedFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const activeFilterCount = Object.values(selectedFilters).flat().length;

  return (
    <div className="bg-card border border-border rounded-lg shadow-warm">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="FunnelIcon" size={20} variant="outline" className="text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Filtres de Recherche</h3>
            {activeFilterCount > 0 && (
              <span className="px-2 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
                {activeFilterCount}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {activeFilterCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                Effacer tout
              </button>
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-muted rounded-lg transition-smooth"
            >
              <Icon 
                name={isExpanded ? "ChevronUpIcon" : "ChevronDownIcon"} 
                size={20} 
                variant="outline" 
              />
            </button>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 space-y-6">
          {Object.entries(filterCategories).map(([category, options]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-3 capitalize">
                {category === 'industry' && 'Secteur d\'Activité'}
                {category === 'country' && 'Pays'}
                {category === 'businessType' && 'Type d\'Entreprise'}
                {category === 'interests' && 'Intérêts Commerciaux'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {options.map((option) => {
                  const isSelected = selectedFilters[category as keyof FilterOptions].includes(option);
                  return (
                    <button
                      key={option}
                      onClick={() => handleFilterToggle(category as keyof FilterOptions, option)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-smooth ${
                        isSelected
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background text-foreground border-border hover:border-primary hover:text-primary'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchmakingFilters;