import { SCHEMA_ISSUESLIST, SCHEMA_ISSUES, SCHEMA_MOREISSUESLIST } from "../schema/issue"
import { ISSUES_LIST, ISSUES_INDEX, ISSUES_MORE } from "../constants/issues"
import fetchQL from "../utils/octokitQL"


export const ISSUESLIST = async (payload) =>
  await fetchQL({
    action: {
      type: ISSUES_LIST
    },
    payload: {
      headers: {
        Accept: 'application/vnd.github.elektra-preview+json'
      },
      ...payload
    },
    schema: SCHEMA_ISSUESLIST
  })

export const ISSUESINDEX = async (payload) =>
  await fetchQL({
    action: {
      type: ISSUES_INDEX
    },
    payload,
    schema: SCHEMA_ISSUES
  })

export const ISSUESMORE = async (payload) =>
  await fetchQL({
    action: {
      type: ISSUES_MORE
    },
    payload: {
      headers: {
        Accept: 'application/vnd.github.elektra-preview+json'
      },
      ...payload
    },
    schema: SCHEMA_MOREISSUESLIST
  })