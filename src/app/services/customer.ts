export interface Customer360 {
    customerId : string;
    customerName: string;
    creationDate: string;
    dob: string;
    crnLob: string;
    rm: string;
    branch: string;
    category: string;
    segment: string;
}

export const fetchCustomer360Details = (query: string) => {
    const response: Customer360 = {
        "customerId": "31082185",
        "customerName": "12-Feb-2019",
        "creationDate": "12-Feb-2019",
        "dob": "11-Dec-1994",
        "crnLob": "51",
        "rm": "NAV",
        "branch": "2847",
        "category": "A",
        "segment": "RL"
    }
    
    return response;
    
    // try {
    //   const response = await fetch(`http://localhost:8080/api/search?query=${query}`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
  
    //   if (!response.ok) {
    //     throw new Error("Failed to fetch search results");
    //   }
  
    //   const data = await response.json();  
    //   return data;
    // } catch (error) {
    //   console.error("Error fetching customer 360 data", error);
    //   throw error;
    // }
  };
  