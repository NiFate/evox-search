export interface OTAData {
  meta: OTAMeta
}

export interface OTAMeta {
  maintainer: string
  oem: string
  device: string
  filename: string
  download: string
  timestamp: number
  md5: string
  sha256: string
  size: number
  version: string
  buildtype: string
  forum: string
  firmware: string
  paypal: string
  telegram: string
}

export interface GitDevices {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string
  type: string
  _links: GitLinks
}

export interface GitLinks {
  self: string
  git: string
  html: string
}