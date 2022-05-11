/*
 * Copyright © 2022 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// original https://github.com/semantic-release/semantic-release/issues/1231#issuecomment-1063671157

//----------------------------------------------------------------------------------------------------------------------

// see https://www.mojohaus.org/license-maven-plugin/
const prepareCmd = `
./mvnw -B license:format
`
const publishCmd = `
./mvnw -B clean license:check package
`
const successCmd = `
echo "::set-output name=new_release_published::true"
echo "::set-output name=new_release_version::\${nextRelease.version}"
echo "::set-output name=branch_type::\${branch.type}"
echo "::set-output name=branch_name::\${branch.name}"
`

//----------------------------------------------------------------------------------------------------------------------

module.exports = {
    tagFormat: "${version}",
    debug: true,
    branches: [
        'master',
        {
            name: 'rc',
            prerelease: true,
        },
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        ['@semantic-release/exec', {prepareCmd, publishCmd, successCmd}],
        ['@semantic-release/git', {assets: '.'}],
        '@semantic-release/github',
    ]
}
