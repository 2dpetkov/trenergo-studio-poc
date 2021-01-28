/*
TRENERGO Studio
Copyright (C) 2021 Dimitar Petkov

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

var socket;

window.onload = function () {
    socket = io();
    socket.on('command', (cmd) => {
        console.log('self commanding', cmd)
    })
}

function testButtonGo() {
    socket.emit('command', 'go');
}

function testButtonPrev() {
    socket.emit('command', 'previous');
}

function testButtonNext() {
    socket.emit('command', 'next');
}