import React, {Component} from 'react';
import Aux from '../hoc/Auxiliary/Auxiliary';


    let pointersCollection = document.getElementsByClassName('paginatorItem');
    //let footer = document.querySelector('.blockMainFooter');
    let chosenIndex = 1;
    let backupCurrentPaginator = [];
    let paginatorWrapper = document.getElementsByClassName('.paginatorWrapper');
    let arrCheck = [];
    let leftDots = null;
    let rightDots = null;
    let leftBtn = null;
    let rightBtn = null;

class Paginator extends Component {
    

    

    f_showDisplay(arrBlocks) {
        // First call
        let pointers = Math.floor(arrBlocks.length / 10);
        let temp = this.f_showPagination(chosenIndex, pointers);

        this.f_chI(arrBlocks);

        return temp;
    }

    f_chI(arrBlocks) {
        let pointers = 0;
        if (arrBlocks.length % 10 == 0) {
            pointers = arrBlocks.length / 10;
        } else {
            pointers = Math.floor(arrBlocks.length / 10) + 1;
        }
        for (var i = 0; i < pointersCollection.length; i++) {
            if (pointersCollection[i].checked == true) {
                chosenIndex = i + 1;
                break;
            }
        }
        let start = (chosenIndex - 1) * 10;
        let end = start + 9;
        for (var j = 0; j < arrBlocks.length; j++) {
            if (j >= start && j <= end) {
                arrBlocks[j].style.display = 'flex';
            } else {
                arrBlocks[j].style.display = 'none';
            }
        }
        this.f_showPagination(chosenIndex, pointers);
    }

    f_showPagination(chIndex, pointers) {
        let startPaginator = 0;
        let paginatorWrapper = document.querySelector('.paginatorWrapper');

        if (paginatorWrapper == null) {
            paginatorWrapper = document.createElement('div');
            paginatorWrapper.className = 'paginatorWrapper';
            //footer.appendChild(paginatorWrapper);
        } else {
            let pointersCollection = document.getElementsByClassName('paginatorItem');
            let pointerLabel = document.getElementsByClassName('pointerLabel');
            let pointersCollectionSide = document.getElementsByClassName('paginatorItemFirst');
            let pointerLabelSide = document.getElementsByClassName('pointerLabelFirst');
            let pointerLabelDotsRight = document.getElementsByClassName('pointerLabelDotsRight');

            for (var k = 0; k < pointerLabel.length; k++) {
                // here we're making paginator backup
                if (pointerLabel[k].style.display == 'block') {
                    backupCurrentPaginator.push(k + 1); // [2,3,4,5,6]
                }
            }
            // console.log(backupCurrentPaginator);

            for (let j = 0; j < pointersCollection.length; j++) {
                pointersCollection[j].parentNode.removeChild(pointersCollection[j]);
                pointerLabel[j].parentNode.removeChild(pointerLabel[j]);
                j--;
            }

            for (let z = 0; z < pointersCollectionSide.length; z++) {
                pointersCollectionSide[z].parentNode.removeChild(pointersCollectionSide[z]);
                pointerLabelSide[z].parentNode.removeChild(pointerLabelSide[z]);
                z--;
            }

            for (let a = 0; a < pointerLabelDotsRight.length; a++) {
                pointerLabelDotsRight[a].parentNode.removeChild(pointerLabelDotsRight[a]);
                a--;
            }
        }

        // console.log(chIndex);

        if (pointers == 1) {
            return null;
        }

        if ((chIndex == 1 && pointers <= 5) || (chIndex == pointers && pointers <= 5) || (chIndex > 1 && pointers <= 5)) {
            // alert("I'm inside first condition")
            let start = 1;
            let limit = 4;
            let leftDots, rightDots, leftBtn, rightBtn, leftBtnEnable, rightBtnEnable = false;
            this.f_buildPaginatorItems(
                start,
                limit,
                pointers,
                chIndex,
                leftDots,
                rightDots,
                leftBtn,
                rightBtn,
                leftBtnEnable,
                rightBtnEnable
            );
        }

        if (chIndex == 1 && pointers > 5) {
            // alert("I'm inside second condition")
            let start = 1;
            let limit = 4;
            let leftDots = false;
            let rightDots = true;
            let leftBtn = true;
            let leftBtnEnable = false;
            let rightBtn = true;
            let rightBtnEnable = true;

            this.f_buildPaginatorItems(
                start,
                limit,
                pointers,
                chIndex,
                leftDots,
                rightDots,
                leftBtn,
                rightBtn,
                leftBtnEnable,
                rightBtnEnable
            );
        }

        if (chIndex == pointers && pointers > 5) {
            // alert("I'm inside third condition")
            let start = pointers - 4;
            let limit = pointers - 1;
            let leftDots = true;
            let rightDots = false;
            let leftBtn = true;
            let leftBtnEnable = true;
            let rightBtn = true;
            let rightBtnEnable = false;

            this.f_buildPaginatorItems(
                start,
                limit,
                pointers,
                chIndex,
                leftDots,
                rightDots,
                leftBtn,
                rightBtn,
                leftBtnEnable,
                rightBtnEnable
            );
        }

        if ((chIndex > 1 && chIndex != pointers && pointers > 5) || (chIndex < pointers && chIndex != 1 && pointers > 5)) {
            let leftBtn = true;
            let leftBtnEnable = true;
            let rightBtn = true;
            let rightBtnEnable = true;

            for (let i = 0; i < backupCurrentPaginator.length; i++) {
                if (chIndex == backupCurrentPaginator[i]) {
                    if (backupCurrentPaginator[i - 1] != undefined && backupCurrentPaginator[i + 1] != undefined) {
                        let start = backupCurrentPaginator[0];
                        let limit = backupCurrentPaginator[3];
                        if (chIndex >= 2 && chIndex < pointers && backupCurrentPaginator[0] == 1) {
                            leftDots = false;
                            rightDots = true;
                        }
                        if (chIndex >= 2 && chIndex < pointers && backupCurrentPaginator[4] == pointers) {
                            // leftDots = true;
                            rightDots = false;
                        }
                        this.f_buildPaginatorItems(
                            start,
                            limit,
                            pointers,
                            chIndex,
                            leftDots,
                            rightDots,
                            leftBtn,
                            rightBtn,
                            leftBtnEnable,
                            rightBtnEnable
                        );
                    } else {
                        if (backupCurrentPaginator[i + 1] == undefined) {
                            arrCheck = [...backupCurrentPaginator];
                            for (let y = 0; y < arrCheck.length; y++) {
                                arrCheck[y] = arrCheck[y] + 1;
                            }
                            console.log(arrCheck);
                            if (chIndex >= 2 && chIndex < pointers && arrCheck[0] > 1) {
                                leftDots = true;
                            }
                            if (chIndex >= 2 && chIndex < pointers && arrCheck[4] < pointers) {
                                rightDots = true;
                            } else if (chIndex >= 2 && chIndex < pointers && arrCheck[4] == pointers) {
                                rightDots = false;
                            }
                            let start = backupCurrentPaginator[1];
                            let limit = backupCurrentPaginator[4];
                            //console.log(backupCurrentPaginator[1], backupCurrentPaginator[4], pointers, chIndex);
                            this.f_buildPaginatorItems(
                                start,
                                limit,
                                pointers,
                                chIndex,
                                leftDots,
                                rightDots,
                                leftBtn,
                                rightBtn,
                                leftBtnEnable,
                                rightBtnEnable
                            );
                        }
                        if (backupCurrentPaginator[i - 1] == undefined) {
                            arrCheck = [...backupCurrentPaginator];
                            for (let y = 0; y < arrCheck.length; y++) {
                                arrCheck[y] = arrCheck[y] - 1;
                            }
                            if (chIndex >= 2 && chIndex < pointers && arrCheck[0] > 1) {
                                leftDots = true;
                            } else if (chIndex >= 2 && chIndex < pointers && arrCheck[0] == 1) {
                                leftDots = false;
                            }
                            if (chIndex >= 2 && chIndex < pointers && arrCheck[4] < pointers) {
                                rightDots = true;
                            }
                            let start = backupCurrentPaginator[0] - 1;
                            let limit = backupCurrentPaginator[3] - 1;
                            // console.log(backupCurrentPaginator[1], backupCurrentPaginator[4], pointers, chIndex);
                            this.f_buildPaginatorItems(
                                start,
                                limit,
                                pointers,
                                chIndex,
                                leftDots,
                                rightDots,
                                leftBtn,
                                rightBtn,
                                leftBtnEnable,
                                rightBtnEnable
                            );
                        }
                    }
                    break;
                }
            }
        }
        return paginatorWrapper;
    }

    f_buildPaginatorItems(
        start,
        limit,
        pointers,
        chIndex,
        leftDots,
        rightDots,
        leftBtn,
        rightBtn,
        leftBtnEnable,
        rightBtnEnable
    ) {
        let _start = start - 1;
        let _limit = limit;
        let text = start;
        //console.log(start, limit, pointers, chIndex);
        let paginatorWrapper = document.querySelector('.paginatorWrapper');

        if (leftBtn == true) {
            let firstInputLabel = document.createElement('label');
            firstInputLabel.className = 'pointerLabelFirst';
            firstInputLabel.setAttribute('for', 'First');
            let firstInputLabelText = document.createTextNode('First');
            firstInputLabel.appendChild(firstInputLabelText);
            paginatorWrapper.appendChild(firstInputLabel);

            let firstInput = document.createElement('input');
            firstInput.className = 'paginatorItemFirst';
            firstInput.setAttribute('type', 'radio');
            firstInput.setAttribute('name', 'paginatorItemTransit');
            firstInput.setAttribute('id', 'First');
            if (leftBtnEnable == true) {
                firstInput.addEventListener('click', this.f_transit);
            } else {
                firstInput.setAttribute('disabled', 'true');
            }
            paginatorWrapper.appendChild(firstInput);
        }

        if (leftDots == true) {
            let firstLabelDots = document.createElement('label');
            firstLabelDots.className = 'pointerLabelDotsRight';
            // firstInputLabel.setAttribute("for", "First");
            let firstLabelDotsText = document.createTextNode('...');
            firstLabelDots.appendChild(firstLabelDotsText);
            paginatorWrapper.appendChild(firstLabelDots);
        }

        for (var i = 0; i < pointers; i++) {
            let paginatorItem = document.createElement('input');
            paginatorItem.className = 'paginatorItem';
            paginatorItem.setAttribute('type', 'radio');
            paginatorItem.setAttribute('name', 'paginatorItemField');
            paginatorItem.setAttribute('id', i);
            if (i == chIndex - 1) {
                paginatorItem.setAttribute('checked', 'true');
            }
            paginatorItem.addEventListener('click', function () {
                for (var j = 0; j < pointersCollection.length; j++) {
                    if (pointersCollection[j].checked == true) {
                        backupCurrentPaginator = [];
                        for (var k = 0; k < pointerLabel.length; k++) {
                            // here we're making paginator backup
                            if (pointerLabel[k].style.display == 'block') {
                                backupCurrentPaginator.push(k + 1); // [2,3,4,5,6]
                            }
                        }

                        this.f_chI(this.props.blocks);

                        break;
                    }
                }
            });
            paginatorWrapper.appendChild(paginatorItem);

            let pointerLabel = document.createElement('label');
            pointerLabel.className = 'pointerLabel';
            pointerLabel.setAttribute('for', i);
            let pointerLabelText = document.createTextNode(i + 1);
            pointerLabel.appendChild(pointerLabelText);
            text++;
            paginatorWrapper.appendChild(pointerLabel);

            if (i <= limit && i >= _start) {
                //console.log(_start, _limit);
                pointerLabel.setAttribute('style', 'display: block');
            } else {
                pointerLabel.setAttribute('style', 'display: none');
            }
        }

        if (rightDots == true) {
            let lastLabelDots = document.createElement('label');
            lastLabelDots.className = 'pointerLabelDotsRight';
            // firstInputLabel.setAttribute("for", "First");
            let lastLabelDotsText = document.createTextNode('...');
            lastLabelDots.appendChild(lastLabelDotsText);
            paginatorWrapper.appendChild(lastLabelDots);
        }

        if (rightBtn == true) {
            let lastInput = document.createElement('input');
            lastInput.className = 'paginatorItemFirst';
            lastInput.setAttribute('type', 'radio');
            lastInput.setAttribute('name', 'paginatorItemTransit');
            lastInput.setAttribute('id', 'Second');
            if (rightBtnEnable == true) {
                lastInput.addEventListener('click', this.f_transit);
            } else {
                lastInput.setAttribute('disabled', 'true');
            }
            paginatorWrapper.appendChild(lastInput);

            let lastInputLabel = document.createElement('label');
            lastInputLabel.className = 'pointerLabelFirst';
            lastInputLabel.setAttribute('for', 'Second');
            let pointerLabelText = document.createTextNode('Last');
            lastInputLabel.appendChild(pointerLabelText);
            paginatorWrapper.appendChild(lastInputLabel);
        }
    }

    f_transit() {
        let pointerItem = document.getElementsByClassName('paginatorItem');
        let pointersCollectionSide = document.getElementsByClassName('paginatorItemFirst');
        pointersCollectionSide = Array.from(pointersCollectionSide);
        pointerItem = Array.from(pointerItem);

        //console.log(pointersCollectionSide)
        pointersCollectionSide.forEach((p, i) => {
            if (p.checked) {
                if (i == 0) {
                    //console.log("first");
                    pointerItem.forEach((item) => {
                        if (item.checked) {
                            item.checked = false;
                        }
                    });
                    pointerItem[0].setAttribute('checked', true);
                }
                if (i == 1) {
                    // console.log("last");
                    pointerItem.forEach((item) => {
                        if (item.checked) {
                            item.checked = false;
                        }
                    });
                    pointerItem[pointerItem.length - 1].setAttribute('checked', true);
                }
            }
        });
        this.f_chI(this.props.blocksAll);
    }

    

    render() {
        let pagin = this.f_showDisplay(this.props.blocks);
        console.log(pagin, typeof pagin);
        function returnElement(elt) {
            return <Aux>{elt}</Aux>;
        }
        return pagin
    }
}

export default Paginator;