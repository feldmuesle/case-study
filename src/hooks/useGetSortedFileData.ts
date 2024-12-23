import { useEffect, useState } from 'react';

export type FileDataType = 'image' | 'doc' | 'folder';

export interface FileDataItem {
  name: string;
  id: string;
  type: FileDataType;
}

export interface FileData {
  data: FileDataItem[];
}

export function useGetSortedFileData() {
  const [data, setData] = useState<FileDataItem[]>();

  useEffect(() => {
    const fetchData = async (): Promise<FileData> => {
      const response = await fetch('http://localhost:8010/api/v1/tree');
      return await response.json();
    };

    const setSortedData = async () => {
      try {
        const unsortedData = await fetchData();
        const sortedData = unsortedData.data.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        setData(sortedData);
      } catch (error) {
        console.warn('there was an error with fetching the data');
      }
    };

    setSortedData();
  }, []);

  return data;
}
