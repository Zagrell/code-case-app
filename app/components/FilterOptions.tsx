import React, { useRef } from 'react'

type Props = {
    searchText: any;
    setSearchText: (text: string) => void;
    fetchProducts: () => void;
    complianceTypeIds: number[];
    setComplianceTypeIds: (numbers: number[]) => void
}




const FilterOptions: React.FC<Props> = ({searchText, setSearchText, fetchProducts, complianceTypeIds, setComplianceTypeIds}) => {

    const firstCheckboxRef = useRef<HTMLInputElement>(null);
    const secondCheckboxRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if(event.key === 'Enter'){
        fetchProducts();
        }
    };

    const handleCheckboxChange = (event: React.FormEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        let newComplianceTypeIds: number[] = [];
        
        if (firstCheckboxRef.current?.checked)
            newComplianceTypeIds.push(1);
        if (secondCheckboxRef.current?.checked)
            newComplianceTypeIds.push(2);
        setComplianceTypeIds(newComplianceTypeIds)
    
    }

  return (
    <>
        <input 
            type="text" 
            value={searchText} 
            onChange={(e) => setSearchText(e.currentTarget.value)} 
            onKeyDown={handleKeyDown}
            placeholder="Type here" 
            className="input w-full max-w-xs" />
        <button className="btn btn-primary" onClick={fetchProducts}>Search</button>

        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">1</span> 
                <input 
                    value={1} 
                    type="checkbox" 
                    className="checkbox"
                    ref={firstCheckboxRef}
                    onChange={handleCheckboxChange}
                    />
            </label>
            <label className="label cursor-pointer">
                <span className="label-text">2</span> 
                <input 
                    value={2} 
                    type="checkbox" 
                    className="checkbox"
                    ref={secondCheckboxRef} 
                    onChange={handleCheckboxChange}
                    />
            </label>
        </div>




    </>
  )
}

export default FilterOptions