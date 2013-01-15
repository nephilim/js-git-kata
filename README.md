js-git-kata
===========

Javascript and Git study materials

## 사전 준비 

1. [js-git-kata](https://github.com/nephilim/js-git-kata)를 방문하여 오른쪽 상단의 fork를 누름
    - fork 후 자신의 github 저장소에 js-git-kata가 복제됨
    - github에서의 `git clone`과 유사한 작업임
2. `git clone https://github.com/${자신의id}/js-git-kata.git`를 이용하여 로컬에 복사
    - fork 결과물을 **자신의 github 저장소로부터 로컬에 가져오는 작업**임
    - 참고로, 자신의 작업이 원래 github 저장소에 반영되기를 바랄 경우 pull request라는 과정을 거쳐야함
        - 관련 자료: [실전에서의 pull request](http://blog.springsource.org/2011/07/18/social-coding-pull-requests-what-to-do-when-things-get-complicated/)를 잘 설명한 springsource 글
        - pull request의 경우 github을 이용한 공동작업에서는 반드시 알아야 하는 개념이니, 참고 자료를 미리 읽어두면 좋을 듯 
3. 추적 브랜치는 master만 생성되어 있으나, `git branch -a`를 통해 보면 다음과 같이 remote의 모든 branch를 확인할 수 있음

        > git branch -a
        * master
        remotes/origin/HEAD -> origin/master
        remotes/origin/env-setting
        remotes/origin/master

4. 참고: 3에서 master이외의 다른 브랜치에서 작업이 필요한 경우 
    - `git checkout -b ${브랜치명} ${원격브랜치명}`의 형태로 직접 **추적 브랜치**를 만들어 준다.
    - `git checkout -b env-setting remotes/origin/env-setting`
