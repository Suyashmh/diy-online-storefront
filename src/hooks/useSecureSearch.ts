import { useState, useCallback } from 'react';
import { validateSearchInput } from '@/lib/validation';
import { useToast } from '@/hooks/use-toast';

export function useSecureSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchError, setSearchError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSearchChange = useCallback((value: string) => {
    const validation = validateSearchInput(value);
    
    if (!validation.isValid && value.length > 0) {
      setSearchError(validation.error || 'Invalid search input');
      toast({
        title: "Invalid Search",
        description: validation.error || 'Please enter a valid search term',
        variant: "destructive",
      });
    } else {
      setSearchError(null);
    }

    setSearchQuery(validation.sanitized);
  }, [toast]);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setSearchError(null);
  }, []);

  return {
    searchQuery,
    searchError,
    handleSearchChange,
    clearSearch,
    isValid: !searchError,
  };
}