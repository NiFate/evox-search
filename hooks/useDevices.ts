import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const GITHUB_API_URL = 'https://api.github.com/repos/Evolution-X/OTA/contents/builds?ref=udc';

const fetchFilesList = async () => {
  const { data } = await axios.get(GITHUB_API_URL);
  return data.map((file: { name: string; download_url: string }) => ({
    name: file.name.replace('.json', ''),
    url: file.download_url,
  }));
};

const fetchDeviceFromFile = async (file: { name: string; url: string }) => {
  const { data } = await axios.get(file.url);
  return {
    codename: file.name,
    meta: data.response[0]
  };
};

const fetchDevices = async () => {
  const filesList = await fetchFilesList();
  const devices = await Promise.all(filesList.map(fetchDeviceFromFile));
  return devices;
};

export const useDevices = () => {
  return useQuery({queryKey: ['devices'], queryFn: fetchDevices});
};
